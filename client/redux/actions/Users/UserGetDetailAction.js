import {
  USER_GET_DETAIL_SUCCESS,
  USER_GET_DETAIL_FAILURE
} from '../../../constants/constants';
import { getUserDetail } from '../../../lib/api/sysContext';
import { enqueueSnackbar } from '../Notifier/NotifierAction';
import { I18n } from 'react-redux-i18n';

//action to get user detail
export function UserGetDetailAction() {
  return dispatch => {
    getUserDetail()
      .then(data => {
        dispatch(UserGetDetailSuccessAction(data));
      })
      .catch(err => {
        dispatch(enqueueSnackbar({
          message: I18n.t(`ERROR_CODE.${err}`),
          options: {
            variant: 'error'
          }
        }));
        dispatch(UserGetDetailFailureAction(err));
      });
  };
}

export function UserGetDetailSuccessAction(data) {
  return {
    type: USER_GET_DETAIL_SUCCESS,
    payload: data
  };
}

export function UserGetDetailFailureAction(data) {
  return {
    type: USER_GET_DETAIL_FAILURE,
    payload: data
  };
}
