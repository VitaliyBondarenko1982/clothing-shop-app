import types from '../types';

const initialState = {
  collections: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
