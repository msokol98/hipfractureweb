import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiHost } from 'config.js';
import Portal from './Portal';

const PortalContainer = () => {

    const [createdQuizzes, setCreatedQuizzes] = useState([]), jwt = localStorage.getItem('jwt');

    const getUsersQuizzes = () => {
        axios.get(`${apiHost}/api/quizzes/created`, {
            headers: { 'Authorization': `Bearer ${jwt}` }
        }).then(res => {
            setCreatedQuizzes(res.data)
        })
    }

    useEffect(getUsersQuizzes, [jwt]);

    const deleteQuiz = quiz => {

        const id = quiz.id;

        axios.delete(`${apiHost}/quizzes/${id}`, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')}` }
        }).then(() => {
            const updatedQuizzes = createdQuizzes.filter(quiz => quiz.id !== id);
            setCreatedQuizzes(updatedQuizzes);
        })
    }

    const addQuestions = quiz => {
        window.location = `/create?quizId=${quiz.id}`
    }
    
    return <Portal createdQuizzes={createdQuizzes} deleteQuiz={deleteQuiz} addQuestions={addQuestions} />

}

export default PortalContainer;