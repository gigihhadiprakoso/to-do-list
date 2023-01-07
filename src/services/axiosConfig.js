import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todo.api.devcode.gethired.id/',
});

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


export default instance;