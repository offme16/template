import { useState } from "react";
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';

type Item = {
    name: string;
    value: string;
};
//Варианты выбора валюты
const items: Item[] = [
    {
        name: '$',
        value: 'КУРС ДОЛЛАРА',
    },
    {
        name: '€',
        value: 'КУРС ЕВРО',
    },
    {
        name: '¥',
        value: 'КУРС ЮАНЯ',
    }
];

interface ChoiceBtnProps {
  setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
  setSelectedSymbol: React.Dispatch<React.SetStateAction<string>>;
}

const ChoiceBtn: React.FC<ChoiceBtnProps> = ({ setSelectedIndicator,setSelectedSymbol }) => {
  const [value, setValue] = useState<Item | null>(items[0]);
//Функция обработки изменения выбранного элемента
  const handleOnChange = (newValue: Item) => {
    setValue(newValue);
    setSelectedIndicator(newValue.value);
    setSelectedSymbol(newValue.name);
  };

  return (
    <ChoiceGroup
      items={items}
      value={value}
      onChange={({ value }) => handleOnChange(value)}
      getItemLabel={(item) => item.name}
      multiple={false}
      name="ChoiceBtn"
    />
  );
};

export default ChoiceBtn;
