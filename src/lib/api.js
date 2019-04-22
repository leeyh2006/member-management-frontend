import axios from 'axios';
import queryString from 'query-string';

export const getBoardData =(boardId) =>axios.get(`https://jsonplaceholder.typicode.com/posts/1`);