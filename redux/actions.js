
export const FETCH_BLOG_DATA_REQUEST = 'FETCH_BLOG_DATA_REQUEST';
export const FETCH_BLOG_DATA_SUCCESS = 'FETCH_BLOG_DATA_SUCCESS';
export const FETCH_BLOG_DATA_FAILURE = 'FETCH_BLOG_DATA_FAILURE';

export const fetchBlogDataRequest = () => ({
  type: FETCH_BLOG_DATA_REQUEST
});

export const fetchBlogDataSuccess = (data) => ({
  type: FETCH_BLOG_DATA_SUCCESS,
  payload: data
});

export const fetchBlogDataFailure = (error) => ({
  type: FETCH_BLOG_DATA_FAILURE,
  payload: error
});


export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST
});

export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories
});

export const fetchCategoriesFailure = (error) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error
});