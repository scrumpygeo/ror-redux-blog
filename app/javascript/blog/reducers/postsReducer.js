import _ from 'lodash';
import {
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_POST:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_POST:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_POST:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_POST:
      // in this case action creator payload just IS the id not the whole object.
      // also _omit creates a new object (ie doesn't change original object) so no nead for spread operator stuff
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
