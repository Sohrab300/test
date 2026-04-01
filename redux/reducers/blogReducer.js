import { FETCH_BLOG_DATA_FAILURE, FETCH_BLOG_DATA_REQUEST, FETCH_BLOG_DATA_SUCCESS } from "../actions";



const initialState = {
  loading: false,
  blogData: [],
  error: null
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOG_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_BLOG_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        blogData: action.payload,
        error: null
      };
    case FETCH_BLOG_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        blogData: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default blogReducer;
