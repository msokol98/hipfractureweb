import { apiHost } from 'config';
import axios from 'axios';

const postToServer = (path, body) => {
    return axios.post(`${apiHost}/${path}`, body, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
    })
};

export default postToServer;