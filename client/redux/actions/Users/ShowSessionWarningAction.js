import { SHOW_SESSION_WARNING } from '../../../constants/constants';

export function ShowSessionWarningAction(isShow) {
  return {
    type: SHOW_SESSION_WARNING,
    payload: isShow
  };
}
