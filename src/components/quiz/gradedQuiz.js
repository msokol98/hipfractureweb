import React from 'react';
import GradedQuestion from './gradedQuestion';
import runGrader from 'utils/runGrader';

const GradedQuiz = ({ quiz, givenAnswers, retake }) => {

    const { topic, questions, creator } = quiz, numCorrect = runGrader(quiz.questions, givenAnswers), PASSING_GRADE = .7;
    const gradeMessage = `You got ${numCorrect} out of ${questions.length} correct.`;

    let classes = "notification", secondaryMessage = "";

    if((numCorrect / questions.length) < PASSING_GRADE) {
        classes += " is-warning";
        secondaryMessage += "Let's do better next time."
    } else {
        classes += " is-success";
        secondaryMessage += "Really well done!"
    }

    return(
        <div className="container" style={{padding: "3% 0", maxWidth: "600px"}}>
            <div className={classes}>{gradeMessage}<br/>{secondaryMessage}</div>

            <button onClick={() => window.location = "/create"} className="button with-space-on-right">Create a Quiz</button>
            <button onClick={() => window.location = "/quizzes"} className="button">See Other Quizzes</button>
            <br /><br />

            <h3>Quiz on <strong>{topic}</strong> by {creator}</h3>

            {questions && questions.map((question, idx) => {

                const chosenAnswer = givenAnswers[question.id];

                return(
                    <GradedQuestion 
                        key={idx} 
                        number={idx+1} 
                        question={question} 
                        chosenAnswer={chosenAnswer}
                    />
                )
            })}

        <button onClick={retake} className="button is-info">Retake</button>

        </div>
    )
};
 
export default GradedQuiz;