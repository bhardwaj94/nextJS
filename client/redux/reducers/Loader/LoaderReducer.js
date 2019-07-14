import { GET_LOADER, REMOVE_LOADER, RESET_LOADER } from '../../../constants/constants';

const initialState = 0;

const LoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOADER:
      return state + action.payload;
    case REMOVE_LOADER:
      return state - action.payload;
    case RESET_LOADER:
      return initialState;
    default:
      return state;
  }
};

export default LoaderReducer;
