import axios from 'axios';
// put endpoint together as const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

//const API_KEY = '?key=asdfsdf'; //not high security so dont hide


const token = document.querySelector('[name="csrf-token"]') || {content: 'no-csrf-token'}

export default axios.create({
  headers: {
    common: {
      'X-CSRF-Token': token.content
    }
  },
  baseURL: '/api/v1',     // ie empty so then action looks at local server.
});
