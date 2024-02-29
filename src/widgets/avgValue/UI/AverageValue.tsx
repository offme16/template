import style from './AverageValue.module.scss';
interface AvgValue {
    filteredData: any[];
}

const AverageValue: React.FC<AvgValue> = (props) => {
    const calculateAverage = (data: any[]) => {
        if (!data || data.length === 0) return 0;
        const sum = data.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
        return (sum / data.length).toFixed(1);
    };

    const averageValue = calculateAverage(props.filteredData);

    return (
        <div className={style.h}>
            <span>{averageValue} р</span>
        </div>
    )
} 

export default AverageValue;