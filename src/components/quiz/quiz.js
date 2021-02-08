import React from 'react';
import Question from './question';

const Quiz = ({ quiz, checkAnswers, setAnswer }) => {

    const { topic, questions, creator } = quiz;

    return(
        <div className="container" style={{padding: "3% 0", maxWidth: "600px"}}>
            <h3>Quiz on <strong>{topic}</strong> by {creator}</h3>

            {questions && questions.map((question, idx) => <Question key={idx} number={idx+1} question={question} setAnswer={setAnswer} />)}

            <button onClick={checkAnswers} className="button is-info">Check Answers</button>
        </div>
    )
};
 
export default Quiz;