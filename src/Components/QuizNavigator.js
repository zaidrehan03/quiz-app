import React from 'react';
import { Button } from '@mui/material';

function QuizNavigation({ 
  currentIndex, 
  totalQuestions, 
  goToNextQuestion, 
  isOptionSelected 
}) {
  return (
    <div  style={{  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Button
      style={{backgroundColor: 'lightgray'}}
        onClick={goToNextQuestion} 
        disabled={!isOptionSelected}
      >
        {currentIndex === totalQuestions - 1 ? "Finish" : "Next"}
      </Button>
    </div>
  );
}

export default QuizNavigation;
