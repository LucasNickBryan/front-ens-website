import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const OPTIONS = [
  { value: 1, label: 'Président' },
  { value: 2, label: 'Vice président' },
  { value: 3, label: 'Délégué' },
];

export default function SelectUi(props) {
  const {options, defaultValue} = props
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(()=>{
      if(defaultValue){
        setSelectedOption(defaultValue)
      }
  }, [])

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}

SelectUi.defaultProps={
  options: OPTIONS,
  defaultValue:null,
}