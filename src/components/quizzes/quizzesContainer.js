import React, { useState, useEffect } from 'react';
import { apiHost } from 'config';
import axios from 'axios';
import Quizzes from './quizzes';
import Loading from 'components/loading';

const QuizzesContainer = () => {
    const [quizzes, setQuizzes] = useState([]);

    const getQuizzes = params => {
        const config = params ? { params } : {};

        axios.get(`${apiHost}/api/quizzes`, config).then(res => {
            setQuizzes(res.data)
        });
    }

    useEffect(getQuizzes, []);

    const filterByTopic = topic => {
        if(topic === "")
            getQuizzes();
        else
            getQuizzes({topic})
    }

    if(!quizzes) return <Loading />

    return(
        <div className="portal">
            <Quizzes quizzes={quizzes} filterByTopic={filterByTopic} />
        </div>
    )

}
 
export default QuizzesContainer;