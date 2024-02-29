import style from './AverageValue.module.scss';
interface AvgValue {
    filteredData: any[];
}

const AverageValue: React.FC<AvgValue> = (props) => {
    //НАХОЖДЕНИЕ СРЕДНЕГО ЗНАЧЕНИЯ 
    const calculateAverage = (data: any[]) => {
        if (!data || data.length === 0) return 0;
        const sum = data.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
        return (sum / data.length).toFixed(1);
    };

    const averageValue = calculateAverage(props.filteredData);

    return (
        <div className={style.avg_box}>
            <h2>Среднее за период</h2>
            <div className={style.avg_box_group}><span className={style.avg_box__spanValue}>{averageValue}</span><p className={style.avg_box__p}>₽</p></div>
        </div>
    )
} 

export default AverageValue;