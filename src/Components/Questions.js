import { useState, useEffect } from 'react';

function Questions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    import('./questions.json')
      .then((data) => {
        setQuestions(data.questions);
      });
  }, []);

  return questions;
}

export default Questions;
