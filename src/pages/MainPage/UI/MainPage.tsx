import { ReactECharts } from "Echarts/ReactECharts";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getCurrency } from "entities/currency/model/asynkThunk/currencyAsyncThunk";
import { useAppDispatch } from "shared/lib/useAppDispatch";
import { getResult } from 'entities/currency/model/selectors/getResult/getResult';
import { AverageValue } from "widgets/avgValue";
import style from "./MainPage.module.scss";
import { ChoiceBtn } from "widgets/choiceGroup";
import { color } from "echarts";

const MainPage = () => {
    const dispatch = useAppDispatch();
    const [selectedIndicator, setSelectedIndicator] = useState<string>("КУРС ДОЛЛАРА");
    const [selectedSymbol, setSelectedSymbol] = useState<string>("$");
    const data = useSelector(getResult);

    useEffect(() => {
        dispatch(getCurrency());
    }, [dispatch]);

    const filteredData = data?.filter(item => item.indicator.toLocaleUpperCase() === selectedIndicator);
    
    const options = {
        title: {
            text: `${selectedIndicator}, ${selectedSymbol}/P`,
        },
        xAxis: {
            type: 'category',
            data: filteredData?.map(item => item.month),
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#667985',
                }
            }
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{c} руб.',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: '#667985',
                },
            },
            extraCssText: 'box-shadow: 0 0 0 rgba(0, 0, 0, 0);',
        },
        series: [{
            name: `${selectedIndicator}`,
            type: 'line',
            data: filteredData?.map(item => item.value),
            lineStyle: {
                color: '#F38B00',
            },
            itemStyle: {
                color: 'transparent',
            },
            showSymbol: false
        }],
    };

    return (
        <div className={style.container_main}>
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
        </div>
    )
}

export default MainPage;
