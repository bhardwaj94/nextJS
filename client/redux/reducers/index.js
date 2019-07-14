import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import { LanguageReducer } from './i18n/LanguageReducer';
import UserDetailReducer from './Users/UserDetailReducer';
import ShowSessionWarningReducer from './Users/ShowSessionWarningReducer';
import LoaderReducer from './Loader/LoaderReducer';
import DocumentLoadReducer from './Loader/DocumentLoadReducer';
import NotifierReducer from './Notifier/NotifierReducer';

export default combineReducers({
  i18n: i18nReducer,
  language: LanguageReducer,
  sysContext: UserDetailReducer,
  isShowSessionWarning: ShowSessionWarningReducer,
  loaderVisible: LoaderReducer,
  documentLoad: DocumentLoadReducer,
  Notifier: NotifierReducer
});
