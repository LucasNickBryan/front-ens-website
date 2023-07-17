import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Président', label: 'Président' },
  { value: 'Vice président', label: 'Vice président' },
  { value: 'Délégué', label: 'Délégueé' },
];

export default function SelectUi() {
  const [selectedOption, setSelectedOption] = useState(null);

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