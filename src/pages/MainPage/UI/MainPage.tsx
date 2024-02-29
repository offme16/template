import { ReactECharts } from "Echarts/ReactECharts";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getCurrency } from "entities/currency/model/asynkThunk/currencyAsyncThunk";
import { useAppDispatch } from "shared/lib/useAppDispatch";
import { getResult } from 'entities/currency/model/selectors/getResult/getResult';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { AverageValue } from "widgets/avgValue";
const MainPage = () => {
    const dispatch = useAppDispatch();
    const [selectedIndicator, setSelectedIndicator] = useState<string>("Курс доллара");
    const data = useSelector(getResult);

    useEffect(() => {
        dispatch(getCurrency());
    }, [dispatch]);

    const filteredData = data?.filter(item => item.indicator === selectedIndicator);
    
    const options = {
        title: {
            text: `${selectedIndicator}`,
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
            formatter: '{b}: {c} руб.',
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
        <div>
            <div>
                <button onClick={() => setSelectedIndicator("Курс доллара")}>Курс доллара</button>
                <button onClick={() => setSelectedIndicator("Курс евро")}>Курс евро</button>
                <button onClick={() => setSelectedIndicator("Курс юаня")}>Курс юаня</button>
            </div>
            <ReactECharts
                option={options} 
                style={{ height: '400px' }}
            />
            <div>
            {filteredData && <AverageValue filteredData={filteredData} />}
            </div>
        </div>
    )
}

export default MainPage;
