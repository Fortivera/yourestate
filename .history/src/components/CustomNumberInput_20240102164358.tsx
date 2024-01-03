/* eslint-disable prettier/prettier */
// NumberInput.tsx
import React, { useState } from 'react';


const NumberInput: React.FC<NumberInputProps> = ({ theme }) => {
  const [value, setValue] = useState<number>(0);

  const increment = () => setValue(prevValue => prevValue + 1);
  const decrement = () => setValue(prevValue => prevValue - 1);

  return (
    <div className="number-input-wrapper">
      <button className="decrement-button" onClick={decrement}>-</button>
      <input
        type="number"
        className={`number-input ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}
        value={value}
        readOnly
      />
      <button className="increment-button" onClick={increment}>+</button>
    </div>
  );
};

export default NumberInput;
