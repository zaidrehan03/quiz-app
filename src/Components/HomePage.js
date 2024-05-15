import React, { useState } from 'react';
import "../App.css";
import { FormControlLabel, Checkbox } from '@mui/material';
import QuizQuestions from './QuizController';

function HomePage() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleStartQuiz = () => {
    if (isChecked) {
      setStartQuiz(true);
    } else {
      alert("Please read and check the instructions before starting the quiz.");
    }
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  if (startQuiz) {
    return <QuizQuestions />;
  }
  return (
    <>
      <div className="text-container">
        <div className="centered-text">

            <div>
      <h1 style={{ color: 'white', textAlign: 'center', fontSize: 'xxx-large', fontWeight: 'bolder', fontStyle: 'oblique' }}>QUIZ APP</h1> 
            </div>

          <br/>

          <div style={{ color: 'white', marginLeft: '8px', textAlign: 'center' }}>
            <h1>Instructions for Attempting the Quiz:</h1>
            <br />
            <p>- Click "Start Quiz" to begin.</p>
            <p>- Read each question carefully and select your answer.</p>
            <p>- Click "Submit" to finalize your answers.</p>
            <p>- Review your answers and modify if necessary.</p>
            <p style={{textAlign: 'center'}}>
              <FormControlLabel 
                style={{color: 'yellow'}} 
                control={
                  <Checkbox 
                    style={{ color: 'white' }} 
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                } 
                label="Please check the instructions before starting the quiz" />
            </p>
          </div>
          
          <br />

          <div style={{ marginLeft: '8px', textAlign: 'center' }}>
            <button onClick={handleStartQuiz} style={{ backgroundColor: 'red', color: 'white', fontSize: 'x-large' }}>Start Quiz</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default HomePage;