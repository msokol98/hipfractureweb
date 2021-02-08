import React from 'react';
import QuizPreview from 'components/portal/quizPreview';
import { webHost } from 'config';
import Filter from './filter';

const Quizzes = ({ quizzes, filterByTopic }) => (
    <div className="container">  
        <h3 className="title has-text-weight-light">Here are quizzes people have made...</h3>

        <h5 className="has-text-grey">See quizzes by topic</h5>
        <div style={{maxWidth: "550px"}}>
            <Filter filterByTopic={filterByTopic} />
            <br />
        </div>

        {quizzes && quizzes.map((quiz, idx) => {
            const url = `${webHost}/quizzes/${quiz.id}`;

            return <QuizPreview key={idx} url={url} quiz={quiz} showCreator={true} />
        })}

        <button onClick={() => window.location = "/create"} style={{marginTop: "10px"}} className="button is-info">Create a Quiz</button>
    </div>
)

 
export default Quizzes;