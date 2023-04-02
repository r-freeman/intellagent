export const BASE_URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000/api/v1/'
    : 'https://intellagent-server.herokuapp.com/api/v1/';
export const SOCKETS_URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://intellagent-server.herokuapp.com';