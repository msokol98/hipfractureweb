import React from 'react';
import './styles.css';
import mapIdxToLetter from 'utils/mapIdxToLetter';

const AnswerChoice = ({ value, idx, remove, onChange, placeholder, correctAnswer, setCorrectAnswer }) => {

    let classes = "input with-space-on-right";

    if(correctAnswer === mapIdxToLetter(idx)) {
        classes += " correct-answer";
    }

    return(
        <div className="answer-choice">
            <input 
                required
                type="text" 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={idx}
                className={classes}
            />

            <input type="radio" onClick={() => setCorrectAnswer(idx)} name="answer-choices" className="with-space-on-right" />

            <button onClick={() => remove(idx)} className="delete">Remove</button>
        </div>
    );

};
 
export default AnswerChoice;