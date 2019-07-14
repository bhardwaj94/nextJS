import { DOCUMENT_LOAD } from '../../../constants/constants';

const DocumentLoadReducer = (state = false, action) => {
  switch (action.type) {
    case DOCUMENT_LOAD:
      return action.payload;
    default:
      return state;
  }
};

export default DocumentLoadReducer;
