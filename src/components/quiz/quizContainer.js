import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiHost } from 'config';
import Quiz from './quiz';
import GradedQuiz from './gradedQuiz';
import orderQuestions from 'utils/orderQuestions';

const QuizContainer = props => {

    const quizId = props.match.params.quizId, [quiz, setQuiz] = useState(null);
    const [givenAnswers, setGivenAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const fetchQuiz = () => {
        axios.get(`${apiHost}/api/quizzes/${quizId}`).then(res => {
            const quiz = res.data;
            quiz.questions = orderQuestions(quiz.questions);
            setQuiz(quiz);
        }).catch(() => window.location = "/404")
    }

    useEffect(fetchQuiz, [quizId]);

    const setAnswer = (answer, questionId) => {
        const answers = {...givenAnswers};
        answers[questionId] = answer;
        setGivenAnswers(answers);
    }

    const checkAnswers = () => {
        if(Object.keys(givenAnswers).length !== quiz.questions.length)
            alert("Please answer every question.");
        else {
            setSubmitted(true);
            window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth'
              });
        }
    }

    if(submitted)
        return <GradedQuiz quiz={quiz} givenAnswers={givenAnswers} retake={() => window.location.reload(false)  } />

    if(!quiz)
        return <div>Loading...</div>

    return <Quiz quiz={{...quiz, quizId}} checkAnswers={checkAnswers} setAnswer={setAnswer}  />
}
 
export default QuizContainer;