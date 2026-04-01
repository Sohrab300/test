import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from "../actions";

const initialState = {
  loadingCategories: false,
  categories: [],
  categoriesError: null
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        loadingCategories: true,
        categoriesError: null 
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loadingCategories: false,
        categories: action.payload,
        categoriesError: null
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loadingCategories: false,
        categories: [],
        categoriesError: action.payload
      };
    default:
      return state;
  }
};

export default categoryReducer;
