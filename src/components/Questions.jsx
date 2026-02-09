import { useState, useEffect } from "react";
import questionsData from "../data/questions.json";

export default function Questions() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(70); // seconds
const [timeUp, setTimeUp] = useState(false);


useEffect(() => {
  if (showResult) return;

  if (timeLeft === 0) {
    setTimeUp(true);
    setShowResult(true);
    return;
  }

  const timer = setInterval(() => {
    setTimeLeft((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [timeLeft, showResult]);



  const currentQuestion = questionsData[current];

  const handleOptionClick = (option) => {
  if (selected !== null) return;

  setSelected(option);

  if (option === currentQuestion.answer) {
    setScore((prev) => prev + 1);
  }

  // Auto move to next question after 700ms
  setTimeout(() => {
    setSelected(null);

    if (current + 1 < questionsData.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  }, 300);
};


  // const handleNext = () => {
  //   setSelected(null);

  //   if (current + 1 < questionsData.length) {
  //     setCurrent((prev) => prev + 1);
  //   } else {
  //     setShowResult(true);
  //   }
  // };

  if (showResult) {
    return (
      <div className="min-h-screen flex items-center justify-center  p-4">
        <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {timeUp ? "⏰ Time’s Up!" : "Quiz Completed 🎉"}
          </h1>
          <p className="text-xl text-gray-600">
            Your Score:
            <span className="font-bold text-green-600">
              {" "}
              {score} / {questionsData.length}
            </span>
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Restart Quiz 🔄
          </button>
        </div>
      </div>
    );
  }




  
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white max-w-2xl w-full p-8 rounded-2xl shadow-2xl">
        
        {/* Progress */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm font-semibold text-red-600">
  ⏰ {timeLeft}s
</span>

          <span className="text-sm text-gray-500">
            Question {current + 1} / {questionsData.length}
          </span>
          <span className="text-sm font-semibold text-green-600">
            Score: {score}
          </span>
        </div>

        {/* Question */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => {
            const isCorrect = option === currentQuestion.answer;
            const isSelected = selected === option;

            return (
              <button
                key={index}
                disabled={selected !== null || timeUp}
                onClick={() => handleOptionClick(option)}
                className={`w-full text-left px-5 py-3 rounded-xl border transition font-medium
                  ${
                    selected
                      ? isCorrect
                        ? "bg-green-100 border-green-500 text-green-800"
                        : isSelected
                        ? "bg-red-100 border-red-500 text-red-800"
                        : "bg-gray-100 text-gray-500"
                      : "hover:bg-green-50 border-gray-300"
                  }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        
      </div>
    </div>
  );
}
