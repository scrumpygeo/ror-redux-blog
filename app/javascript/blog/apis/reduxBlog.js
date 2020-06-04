import axios from 'axios';
// put endpoint together as const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

//const API_KEY = '?key=asdfsdf'; //not high security so dont hide

export default axios.create({
  baseURL: 'http://reduxblog.herokuapp.com/api',
});
