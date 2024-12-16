import React, { useState } from "react";
import { motion } from "framer-motion";
import { sharedStyles } from "../styles/SharedStyles";
import { FaMedal, FaCheck, FaTimes, FaQuestionCircle } from 'react-icons/fa';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      questionText: "What identification is typically required to vote in person?",
      options: [
        "Valid government-issued photo ID",
        "Social media profile",
        "Library card",
        "No ID required"
      ],
      correctAnswer: 0
    },
    {
      questionText: "When can you register to vote?",
      options: [
        "Only on election day",
        "Up until your state's registration deadline",
        "Only during summer months",
        "Only at government offices"
      ],
      correctAnswer: 1
    },
    {
      questionText: "What is early voting?",
      options: [
        "Voting before you turn 18",
        "Voting in the morning",
        "Casting your ballot before election day",
        "Predicting election results"
      ],
      correctAnswer: 2
    },
    {
      questionText: "How can you find your polling place?",
      options: [
        "It's always the nearest school",
        "Check your state's election website",
        "Ask your neighbors",
        "Visit any voting location"
      ],
      correctAnswer: 1
    }
  ];

  const handleAnswerClick = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  const questionCardStyle = {
    ...sharedStyles.card,
    padding: '30px',
    maxWidth: '800px',
    margin: '0 auto 20px',
  };

  const optionStyle = (index) => ({
    ...sharedStyles.secondaryButton,
    width: '100%',
    marginBottom: '12px',
    background: selectedAnswer === index ? 'var(--primary-blue)' : 'transparent',
    color: selectedAnswer === index ? 'var(--pure-white)' : 'var(--primary-blue)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  });

  const progressStyle = {
    width: '100%',
    height: '8px',
    backgroundColor: 'var(--gray-200)',
    borderRadius: '4px',
    marginBottom: '30px',
  };

  const progressBarStyle = {
    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
    height: '100%',
    backgroundColor: 'var(--primary-blue)',
    borderRadius: '4px',
    transition: 'width 0.3s ease',
  };

  return (
    <div style={sharedStyles.pageContainer}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={sharedStyles.contentCard}
      >
        <h1 style={sharedStyles.pageTitle}>
          <FaQuestionCircle style={{ marginRight: '10px' }} />
          Voting Knowledge Quiz
        </h1>

        {!showScore ? (
          <>
            <div style={progressStyle}>
              <div style={progressBarStyle} />
            </div>

            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              style={questionCardStyle}
            >
              <h2 style={{ 
                ...sharedStyles.sectionTitle, 
                marginBottom: '30px',
                textAlign: 'center' 
              }}>
                Question {currentQuestion + 1} of {questions.length}
              </h2>
              
              <p style={{ 
                fontSize: '18px', 
                marginBottom: '30px',
                textAlign: 'center',
                color: 'var(--primary-blue)',
                fontWeight: '500'
              }}>
                {questions[currentQuestion].questionText}
              </p>

              <div>
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    style={optionStyle(index)}
                    whileHover={{ transform: 'translateY(-2px)' }}
                    whileTap={{ transform: 'translateY(0)' }}
                    disabled={selectedAnswer !== null}
                  >
                    {selectedAnswer === index && (
                      index === questions[currentQuestion].correctAnswer ? 
                        <FaCheck color="var(--pure-white)" /> : 
                        <FaTimes color="var(--pure-white)" />
                    )}
                    {option}
                  </motion.button>
                ))}
              </div>

              {selectedAnswer !== null && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    ...sharedStyles.primaryButton,
                    width: '100%',
                    marginTop: '20px'
                  }}
                  onClick={handleNextQuestion}
                  whileHover={{ transform: 'translateY(-2px)' }}
                  whileTap={{ transform: 'translateY(0)' }}
                >
                  {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </motion.button>
              )}
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              ...questionCardStyle,
              textAlign: 'center'
            }}
          >
            <FaMedal size={60} color="var(--star-gold)" style={{ marginBottom: '20px' }} />
            <h2 style={{ 
              ...sharedStyles.sectionTitle,
              fontSize: '28px',
              marginBottom: '20px'
            }}>
              Quiz Complete!
            </h2>
            <p style={{ 
              fontSize: '20px',
              marginBottom: '30px',
              color: 'var(--primary-blue)'
            }}>
              You scored {score} out of {questions.length}
            </p>
            <motion.button
              style={sharedStyles.primaryButton}
              onClick={handleRestartQuiz}
              whileHover={{ transform: 'translateY(-2px)' }}
              whileTap={{ transform: 'translateY(0)' }}
            >
              Take Quiz Again
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Quiz;
