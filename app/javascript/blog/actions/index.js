import reduxBlog from '../apis/reduxBlog';
import history from '../history';
import {
  FETCH_POSTS,
  CREATE_POST,
  FETCH_POST,
  DELETE_POST,
  EDIT_POST,
} from './types';

const API_KEY = '?key=asdfsdf';

// NB: due to thunk we call the dispatch function manually with the action we want to dispatch.
// instead of the classic return {  type: 'FETCH_POSTS', payload: promise }
export const fetchPosts = () => async (dispatch) => {
  const response = await reduxBlog.get(`/posts${API_KEY}`);
  // console.log(response);
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchPost = (id) => async (dispatch) => {
  const response = await reduxBlog.get(`/posts/${id}`);

  dispatch({ type: FETCH_POST, payload: response.data });
};

export const createPost = (formValues) => async (dispatch) => {
  const response = await reduxBlog.post(`/posts`, formValues);
  // console.log(response.data);

  dispatch({ type: CREATE_POST, payload: response.data });
  // here do programmatic navigation to get user to root (index page):
  history.push('/'); // navigate to this route
};

export const editPost = (id, formValues) => async (dispatch) => {
  const response = await reduxBlog.patch(`/posts/${id}`, formValues);

  dispatch({ type: EDIT_POST, payload: response.data });
  history.push('/');
};

export const deletePost = (id) => async (dispatch) => {
  await reduxBlog.delete(`/posts/${id}`);

  dispatch({ type: DELETE_POST, payload: id });
  history.push('/');
};
