import React from 'react';
import './styles.css';
import createMarkup from 'utils/createMarkup';  

const Question = ({ question, number }) => {

    const { prompt, answerChoices, correctAnswer } = question;

    return(
        <div className="new-question">
            <h4>Question {number}</h4>

            <div className="new-question-prompt input" dangerouslySetInnerHTML={createMarkup(prompt)} />
            
            {answerChoices && answerChoices.map((answerChoice, idx) => {

                let classes = "input";

                if(answerChoice.letter === correctAnswer)
                    classes += " correct-answer";

                return <div key={idx} className={classes} dangerouslySetInnerHTML={createMarkup(answerChoice.body)} />
                
        
            })}
        </div>
    )
}
 
export default Question;