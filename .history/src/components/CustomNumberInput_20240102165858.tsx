/* eslint-disable prettier/prettier */
// NumberInput.tsx
import React, { useState } from 'react';

interface inputAtributes {
    id?: string
    userStyling: string
    userDefaultValue: number
    type: string
    name: string
    ariaLabel: string
}

// eslint-disable-next-line no-unused-vars
const NumberInput = ({ userStyling, userDefaultValue, type, name, ariaLabel, id}:inputAtributes) => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState<number>(0)

  const increment = () => setValue(prevValue => prevValue + 1)
  const decrement = () => setValue(prevValue => prevValue - 1)

  return (
    <div className="">
      <button className="decrement-button" onClick={decrement}>-</button>
      <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type={type} name={name} aria-label={ariaLabel} defaultValue={userDefaultValue} />
      <button className="increment-button" onClick={increment}>+</button>
    </div>
  );
};

export default NumberInput;
