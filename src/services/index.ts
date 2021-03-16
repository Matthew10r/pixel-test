import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://8ee41f94-d4f4-439d-8233-e573edca74ff.mock.pstmn.io',
});

export default instance;
