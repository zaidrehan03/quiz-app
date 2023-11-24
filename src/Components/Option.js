import React from 'react';

function Option({ option, handleOptionSelect, isSelected }) {
  return (
    <label>
      <input
      style={{color: 'white'}}
        type="radio"
        name="options"
        value={option}
        checked={isSelected}
        onChange={handleOptionSelect}
      />
      {option}
    </label>
  );
}

export default Option;
