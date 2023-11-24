import React, { useState } from "react";
import Questions from "./Questions";
import QuestionDisplay from "./QuestionDisplay";
import QuizNavigation from "./QuizNavigator";
import QuizResults from "./QuizResults";
import { Card, CardContent } from "@mui/material";

function QuizController() {
  const questions = Questions();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const goToNextQuestion = () => {
    setUserAnswers((answers) => [...answers, selectedAnswer]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
      setSelectedAnswer(null);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedAnswer(option);
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (isQuizCompleted) {
    return <QuizResults questions={questions} userAnswers={userAnswers} />;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card style={{ backgroundColor: "black" }}>
        <CardContent>
          <QuestionDisplay
            question={questions[currentQuestionIndex]}
            selectedAnswer={selectedAnswer}
            handleOptionSelect={handleOptionSelect}
          />
          <QuizNavigation
            currentIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            goToNextQuestion={goToNextQuestion}
            isOptionSelected={selectedAnswer !== null}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default QuizController;
