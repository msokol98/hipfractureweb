import React from 'react';
import './styles.css';
import { webHost } from 'config';
import QuizPreview from './quizPreview';

const Portal = ({ createdQuizzes, deleteQuiz, addQuestions }) => {

    const header = (createdQuizzes && createdQuizzes.length !== 0) ? "Here our a list of quizzes you have made..." : "Let's get started!";

    return(
        <div className="container portal">  
            <h3 className="title has-text-weight-light">{header}</h3>

            {createdQuizzes && createdQuizzes.map((quiz, idx) => {
                const url = `${webHost}/quizzes/${quiz.id}`;

                return <QuizPreview key={idx} url={url} quiz={quiz} deleteQuiz={deleteQuiz} addQuestions={addQuestions} />
            })}

            <button onClick={() => window.location = "/create"} style={{marginTop: "10px"}} className="button is-dark">Create New Quiz</button>
        </div>
    );

};

export default Portal;