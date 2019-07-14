import { USER_GET_DETAIL_SUCCESS, USER_GET_DETAIL_FAILURE } from '../../../constants/constants';

const UserDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_GET_DETAIL_SUCCESS:
      return Object.assign(action.payload);
    case USER_GET_DETAIL_FAILURE:
      return Object.assign({});
    default:
      return state;
  }
};

export default UserDetailReducer;