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
    <div className="flex items-center">
      <button onClick={decrement} className="focus:outline-none">
        {/* Minus SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </button>

      <input
        type="number"
        className={`${userStyling} `}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value, 10) || 0)}
      />

      <button onClick={increment} className="focus:outline-none">
        {/* Plus SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
};

export default NumberInput;
