import { ReactECharts } from "Echarts/ReactECharts";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getCurrency } from "entities/currency/model/asynkThunk/currencyAsyncThunk";
import { useAppDispatch } from "shared/lib/useAppDispatch";
import { getResult } from 'entities/currency/model/selectors/getResult/getResult';
import { AverageValue } from "widgets/avgValue";
import style from "./MainPage.module.scss";
import { ChoiceBtn } from "widgets/choiceGroup";
import { Loader } from '@consta/uikit/Loader';

const MainPage = () => {
    const dispatch = useAppDispatch();
    const [selectedIndicator, setSelectedIndicator] = useState<string>("КУРС ДОЛЛАРА");
    const [selectedSymbol, setSelectedSymbol] = useState<string>("$");
    const data = useSelector(getResult);

    useEffect(() => {
        dispatch(getCurrency());
    }, [dispatch]);

    const filteredData = data?.filter(item => item.indicator.toLocaleUpperCase() === selectedIndicator);

    const minValue = filteredData ? Math.min(...filteredData.map(item => item.value)) : undefined;
    
    const options = {
        title: {
            text: `${selectedIndicator}, ${selectedSymbol}/P`,
        },
        xAxis: {
            type: 'category',
            data: filteredData?.map(item => item.month),
            boundaryGap: false,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false,
            },
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                }
            },
            maxInterval: 4,
            minInterval: 2,
            min: minValue,
        },
        tooltip: {
            trigger: 'axis',
            formatter: ' <strong style="color: black;">{b}</strong><br/> {a} : {c} <strong style="color: black;"> P</strong>',
        },
        
        grid: {
            left: '2%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
        series: [{
            name: `${selectedIndicator}`,
            type: 'line',
            stack: 'Total',
            data: filteredData?.map(item => item.value),
            smooth: true,
            lineStyle: {
                color: '#F38B00',
            },

            itemStyle: {
                color: '#F38B00',
            },
            symbol: 'none'
        }],
    };

    return (
        <div className={style.container_main}>
            {!data ? <Loader size="m"/> : <> 
                <div className={style.container_main__btn}>
                    <ChoiceBtn setSelectedIndicator={setSelectedIndicator} setSelectedSymbol={setSelectedSymbol}/>
                </div>

                <div className={style.container_main__box}>
                    <ReactECharts 
                        option={options} 
                        style={{  width: '90%' , height: '300%'}}
                    />
                    <div>
                        {filteredData && <AverageValue filteredData={filteredData} />}
                    </div>
                </div>
            </>
            }
        </div>
    )
}

export default MainPage;
