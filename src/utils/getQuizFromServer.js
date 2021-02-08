import { apiHost } from 'config';
import axios from 'axios';

const getQuizFromServer = quizId => {
    return axios.get(`${apiHost}/api/quizzes/${quizId}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
    });
}

export default getQuizFromServer;