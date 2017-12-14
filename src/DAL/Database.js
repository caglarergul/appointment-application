import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://appointment-app-8887b.firebaseio.com/'
});

export default instance;