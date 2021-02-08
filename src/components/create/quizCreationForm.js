import React from 'react';
import Question from './question';
import NewQuestion from './newQuestion';
import './styles.css';
import autoGenerateQuiz from 'utils/autoGen';
import getTopics from 'data/getTopics';

const QuizCreationForm = ({ topic, setTopic, questions, submitQuestion, addQuestion, addingQuestion, submitQuiz, editing }) => (
    
    <div className="quiz-creation-form container">

        <h4 className="has-text-weight-light">Topic</h4>

        <div className="select">
            <select value={topic} onChange={e => setTopic(e.target.value)}>
                {getTopics().map(topic => <option>{topic}</option>)}
            </select>
        </div>

        {questions.map((question, idx) => <Question key={idx} question={question} number={idx+1} />)}

        {addingQuestion ? 
            <NewQuestion number={questions.length+1} submitQuestion={submitQuestion} />
        :
            <div>
                <button className="button is-info with-space-on-right" onClick={addQuestion}>Add New Question</button>
                <button className="button is-info" onClick={submitQuiz}>{editing ? "Update Quiz" : "Create Quiz"}</button>
            </div>
        }


        {!editing && 
        <>
            <br />
            <div className="notification is-info is-light">
                <p>Don't want to write the questions? We can make a quiz for you.</p>
                <button onClick={autoGenerateQuiz} className="button">Auto-generate a quiz</button>
            </div>

        </>}
    </div>

);

 
export default QuizCreationForm;