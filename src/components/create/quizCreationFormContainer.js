import React, { useState, useEffect } from 'react';
import QuizCreationForm from './quizCreationForm';
import postToServer from 'utils/postToServer';
import putToServer from 'utils/patchToServer';
import { webHost } from 'config';
import getQuizFromServer from 'utils/getQuizFromServer';

const QuizCreationFormContainer = () => {

    const [topic, setTopic] = useState("");
    const [questions, setQuestions] = useState([]);
    const [addingQuestion, setAddingQuestion] = useState(true);

    const quizId = new URLSearchParams(window.location.search).get('quizId');

    const getQuiz = () => {
        if(quizId) {
            getQuizFromServer(quizId).then(response => {
                const quiz = response.data;
                setTopic(quiz.topic);
                setQuestions(quiz.questions);
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
            }).catch(() => {
                window.location = '/404';
            })
        }
    }

    const addQuestion = () => {
        setAddingQuestion(true);
    }

    const submitQuestion = newQuestion => {
        questions.push(newQuestion);
        setAddingQuestion(false);
    }

    const submitQuiz = event => {
        event.preventDefault();

        if(!isValid())
            return;

        const serverCall = quizId ? putToServer : postToServer, path = quizId ? `api/quizzes/${quizId}` : "api/quizzes"
        
        serverCall(path, { topic, questions }).then(res => {
            const quizId = res.data;
            alert(`You and your friends can take the quiz at ${webHost}/quizzes/${quizId}`);
            window.location = '/portal';
        });

    }

    const isValid = () => {
        if(questions.length < /*3*/ 1) {
            alert("Please provide at least three questions");
            return false;
        }

        if(!topic || topic === "") {
            alert("Please select a topic.");
            return false;
        }

        return true;
    }

    useEffect(getQuiz, [quizId]);

    return(
        <QuizCreationForm
            topic={topic}
            setTopic={setTopic}
            questions={questions}
            addingQuestion={addingQuestion}
            addQuestion={addQuestion}
            submitQuestion={submitQuestion}
            submitQuiz={submitQuiz}
            editing={quizId !== null}
        />
    )
}
 
export default QuizCreationFormContainer;