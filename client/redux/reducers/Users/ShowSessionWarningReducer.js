import { SHOW_SESSION_WARNING } from '../../../constants/constants';

const ShowSessionWarningReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_SESSION_WARNING:
      return action.payload;
    default:
      return state;
  }
};

export default ShowSessionWarningReducer;