В приложении присутствуют:
1. Тултипы, отображающиеся при наведении на график и показывающие значение в данной точке
2. Среднее значение за период
3. Переключение курсов валют
4. Компоненты из библиотеки Consta UI Kit

В рамках данного тестового задания реализовано небольшое React-приложение с использованием FSD-архитектуры [**FSD**](https://feature-sliced.design/ru/docs/get-started/overview),  библиотеки [**echarts.js**](https://echarts.apache.org/en/index.html) и библиотеки компонентов [**Consta UI Kit**](https://consta.design/libs/uikit).

В качестве эндпоинта использовал сервис [**mockAPI**](https://64ad3ed7b470006a5ec59979.mockapi.io/api/v1/collection)

API: Создание экземпляра Axios с указанием базового URL [shared/api/api.ts].
     Ассинхронный get запрос [entities/currency/model/asynkThunk/currencyAsyncThunk.ts].
     Данный запрос вызывается на главной компоненте MainPage[pages/MainPage/UI/MainPage.tsx].

ReactECharts: в компоненте MainPage[pages/MainPage/UI/MainPage.tsx] расписаны надстройки для граффа.

AverageValue: компонента для нахождения среднего значения, пропсами принимает фильтрованный объект.[widgets/avgValue/UI/AverageValue]

ChoiceBtn: компонента для кнопок переключения валют созданный с помощью библиотеки Consta UI Kit. Выбранный символ валюты передаются через props в родительский компонент.[widgets/choiceGroup/UI/ChoiceBtn]

