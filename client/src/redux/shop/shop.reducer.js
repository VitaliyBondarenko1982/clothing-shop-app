import types from '../types';

const initialState = {
  collections: null,
  isFetchingCollections: false,
  errorMessage: undefined,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetchingCollections: true,
      };
    case types.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetchingCollections: false,
        collections: action.payload,
      };
    case types.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetchingCollections: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
