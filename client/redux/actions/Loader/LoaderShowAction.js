import { GET_LOADER, REMOVE_LOADER, RESET_LOADER, DOCUMENT_LOAD } from '../../../constants/constants';

export function ShowLoaderAction(data) {
  return {
    type: GET_LOADER,
    payload: data
  };
}

export function RemoveLoaderAction(data) {
  return {
    type: REMOVE_LOADER,
    payload: data
  };
}

export function ResetLoaderAction(data) {
  return {
    type: RESET_LOADER,
    payload: data
  };
}

export function ChangeDocumentLoadAction(data) {
  return {
    type: DOCUMENT_LOAD,
    payload: data
  };
}
