// import React, { useState, useEffect } from 'react';

// function QuizResults({ questions, userAnswers }) {
//   const [correctCount, setCorrectCount] = useState(0);
//   const [wrongCount, setWrongCount] = useState(0);

//   useEffect(() => {
  
//     calculateScore();
//   }, []);

//   const calculateScore = () => {
//     let correct = 0;
//     let wrong = 0;

//     questions.forEach((question, index) => {
//       const userAnswer = userAnswers[index];
//       if (userAnswer === question.correctAnswer) {
//         correct++;
//       } else {
//         wrong++;
//       }
//     });

//     setCorrectCount(correct);
//     setWrongCount(wrong);
//   };

//   return (
//     <div style={{ color: 'white' }}>
//       <h2 style={{ textAlign: 'center' }}>Quiz Results</h2>
//       <h2 style={{ textAlign: 'center' }}>SUMMARY</h2>
//       <p style={{ textAlign: 'center', color: 'green' }}>Correct Answers: {correctCount}</p>
//       <p style={{ textAlign: 'center', color: 'red' }}>Wrong Answers: {wrongCount}</p>

//       <ul>
//         {questions.map((question, index) => (
//           <li key={index}>
//             <h3 style={{ color: 'white' }}>{question.question}</h3>
//             <p style={{ color: 'lightblue' }}>Your answer: {userAnswers[index]}</p>
//             <p style={{ color: 'yellow' }}>Correct answer: {question.correctAnswer}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default QuizResults;

import React, { useState, useEffect } from 'react';

function QuizResults({ questions, userAnswers }) {
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  useEffect(() => {
    [calculateScore]();
  }, []);

  const calculateScore = () => {
    let correct = 0;
    let wrong = 0;

    questions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      if (userAnswer === question.correctAnswer) {
        correct++;
      } else {
        wrong++;
      }
    });

    setCorrectCount(correct);
    setWrongCount(wrong);
  };

  return (
    <div style={{ color: 'white' }}>
      <h2 style={{ textAlign: 'center' }}>Quiz Results</h2>
      <h2 style={{ textAlign: 'center' }}>SUMMARY</h2>
      <p style={{ textAlign: 'center', color: 'green' }}>Correct Answers: {correctCount}</p>
      <p style={{ textAlign: 'center', color: 'red' }}>Wrong Answers: {wrongCount}</p>

      <ul>
        {questions.map((question, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <h3 style={{ color: 'white' }}>{question.question}</h3>
            <p style={{ color: userAnswers[index] === question.correctAnswer ? 'green' : 'red' }}>
              {userAnswers[index] === question.correctAnswer ? '✔️' : '❌'} Your answer: {userAnswers[index]}
            </p>
            {userAnswers[index] !== question.correctAnswer && (
              <p style={{ color: 'yellow' }}>
                Correct answer: {question.correctAnswer}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizResults;


