import Immutable from 'seamless-immutable';
import * as types from './types.actionsTypes';
import type ActionTypePayloadType from './loader.types';

const initialState = Immutable({
  isLoaderShow: false,
});

type ActionType = {
  type: string,
  payload: ActionTypePayloadType
}

const reducer = (state: any = initialState, action: ActionType) => {
  switch (action.type) {
    case types.SHOW_LOADER:
      return state.merge({ isLoaderShow: true });
    case types.HIDE_LOADER:
      return state.merge({ isLoaderShow: false });
    default:
      return state;
  }
};

export default reducer;
