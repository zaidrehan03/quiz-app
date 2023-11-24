import React from 'react';
import Option from './Option';

function QuestionDisplay({ question, selectedAnswer, handleOptionSelect }) {
  return (
    <div>
      <h2 style={{color: 'white'}}>{question.question}</h2>
      <ul >  
        {question.options.map((option, index) => (
          <li key={index} style={{color: 'white'}}>
            <Option
              option={option}
              isSelected={selectedAnswer === option}
              handleOptionSelect={() => handleOptionSelect(option)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionDisplay;
