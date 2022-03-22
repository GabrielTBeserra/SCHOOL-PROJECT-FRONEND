import type ActionTypePayloadType from './loader.types';
import * as types from './types.actionsTypes';

export const hideLoader = (payload: ActionTypePayloadType) => ({
  type: types.HIDE_LOADER,
  payload,
});

export const showLoader = (payload: ActionTypePayloadType) => ({
  type: types.SHOW_LOADER,
  payload,
});
