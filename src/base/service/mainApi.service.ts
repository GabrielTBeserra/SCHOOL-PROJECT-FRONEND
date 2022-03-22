import axios from 'axios';
import store from 'src/base/store/store';
import { HIDE_LOADER, SHOW_LOADER } from 'src/modules/loader/types.actionsTypes';

const defaultApi = axios.create({
  baseURL: 'https://localhost:44365/api/v1/',
});

defaultApi.interceptors.request.use((request) => {
  const token = sessionStorage.getItem('token');
  request.headers.authorization = `Bearer ${token}`;
  store.dispatch({ type: SHOW_LOADER, payload: { isShow: true } });
  return request;
});

defaultApi.interceptors.response.use((response) => {
  store.dispatch({ type: HIDE_LOADER, payload: { isShow: false } });

  return response;
}, (error) => {
  if (error.response.status === 401) {
    sessionStorage.clear();
  }

  store.dispatch({ type: HIDE_LOADER, payload: { isShow: false } });

  return Promise.reject(error);
});

export default defaultApi;
