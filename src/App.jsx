import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Timer from './components/Timer';

function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false }
      ]
    },
    {
      questionText: "Elon musk is CEO of?",
      answerOptions: [
        { answerText: "Tesla", isCorrect: true },
        { answerText: "Facebook", isCorrect: false },
        { answerText: "Google", isCorrect: false },
        { answerText: "Apple", isCorrect: false }
      ]
    },
    {
      questionText: "What is Chat GPT?",
      answerOptions: [
        { answerText: "Hardware", isCorrect: false },
        { answerText: "Cloud Company", isCorrect: false },
        { answerText: "AI Model", isCorrect: true },
        { answerText: "Mobile Company", isCorrect: false }
      ]
    },
  ]
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [timeOut, setTimeOut] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {

      setCurrentQuestion(nextQuestion);
    }
    else {
      alert("End of Quiz!");
      setShowScore(true);
    }
  }
  return (
    <>
      {
        timeOut ? (<div style={{ position: "absolute", top: "40%", left: "40%", fontSize: "30px" }}>Your score is {score}</div >) :
          (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem", gap: "1rem", fontSize: "35px" }}>
              <div>
                Q{currentQuestion + 1}.  {questions[currentQuestion].questionText}
              </div>
              <div>
                <Timer setTimeOut={setTimeOut} questionNumber={currentQuestion} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {
                  questions[currentQuestion].answerOptions.map((item) => {
                    return <div key={item.answerText}>
                      <button onClick={() => { handleAnswer(item.isCorrect) }} style={{ fontSize: "20px" }}>
                        {item.answerText}
                      </button>
                    </div>
                  })
                }

              </div>
            </div>)
      }
    </>



  );
}

export default App;
