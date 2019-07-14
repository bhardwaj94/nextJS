import sendRequest from './sendRequest';

const BASE_PATH = '/api/sysContext';

export const getUserDetail = () =>
  sendRequest(`${BASE_PATH}/`, {
    method: 'GET'
  });
