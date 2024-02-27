import React from 'react';
import { ReactECharts } from '../Echarts/ReactECharts';

function App() {
  const data = {
    dates: ['2024-02-01', '2024-02-02', '2024-02-03', '2024-02-04', '2024-02-05'], // Даты за пять дней
    prices: [73.5, 73.2, 73.7, 73.9, 73.6], // Цены рубля к доллару за пять дней
  };

  // Опции для графика
  const options = {
    title: {
      text: 'Цены рубля к доллару за пять дней',
    },
    xAxis: {
      type: 'category', // Устанавливаем тип оси X как категориальный (даты)
      data: data.dates,
    },
    yAxis: {
      type: 'value', // Устанавливаем тип оси Y как значение
    },
    tooltip: {
      trigger: 'axis', // Триггер для отображения подсказки при наведении на точку
      formatter: '{b}: {c} руб.', // Формат для отображения даты и цены
    },
    series: [
      {
        name: 'Цена',
        type: 'line', // Устанавливаем тип серии как линейный график
        data: data.prices,
      },
    ],
  };
  return <div><ReactECharts
  option={options} // Передаем опции графика
  style={{ height: '400px' }} // Устанавливаем стили
/></div>;
}

export default App;
