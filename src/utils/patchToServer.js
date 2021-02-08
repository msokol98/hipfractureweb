import { apiHost } from 'config';
import axios from 'axios';

const patchToServer = (path, body) => {
    return axios.patch(`${apiHost}/${path}`, body, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
    })
};

export default patchToServer;