import { ReactECharts } from "Echarts/ReactECharts";
import { useSelector } from 'react-redux';
import { getResult } from 'entities/currency/model/selectors/getResult/getResult';
import { useEffect } from "react";
import { getCurrency } from "entities/currency/model/asynkThunk/currencyAsyncThunk";
import { useAppDispatch } from "shared/lib/useAppDispatch";


const MainPage = () => {
    const dispatch = useAppDispatch();
    const data = useSelector(getResult);

    useEffect(() => {
        dispatch(getCurrency());
    }, [dispatch]);

    const options = {
        title: {
            text: 'Курс доллара',
        },
        xAxis: {
            type: 'category',
            data: data?.map(item => item.date),
        },
        yAxis: {
            type: 'value',
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{b}: {c} руб.',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: 'black', // Устанавливаем прозрачный цвет для указателя
                },
            },
            extraCssText: 'box-shadow: 0 0 0 rgba(0, 0, 0, 0);', // Убираем тень для подсказки
        },
        series: [{
            name: 'Курс доллара',
            type: 'line',
            data: data?.map(item => item.value),
            lineStyle: {
                color: 'orange',
            },
            itemStyle: {
                color: 'transparent', // Устанавливаем прозрачный цвет для точек
            },
            showSymbol: false
        }],
    };

    return (
        <div>
            <ReactECharts
                option={options} 
                style={{ height: '400px' }}
            />
            <>
            </>
        </div>
    )
}

export default MainPage;
