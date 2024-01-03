/* eslint-disable prettier/prettier */
// NumberInput.tsx
import React, { useState } from 'react';
import { input } from 'zod';

interface inputAtributes {
    userStyling: string
    userDefaultValue: number
    type: string
    name: string
    ariaLabel: string
}

const NumberInput = ({ userStyling, userDefaultValue, type, name, ariaLabel}:inputAtributes) => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState<number>(0)

  const increment = () => setValue(prevValue => prevValue + 1)
  const decrement = () => setValue(prevValue => prevValue - 1)

  return (
    <div className="">
      <button className="decrement-button" onClick={decrement}>-</button>
      <input className={userStyling} id="" type="number" name="address" aria-label="Address" defaultValue={userDefaultValue} />
      <button className="increment-button" onClick={increment}>+</button>
    </div>
  );
};

export default NumberInput;
