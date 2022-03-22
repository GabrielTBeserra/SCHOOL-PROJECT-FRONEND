import Immutable from 'seamless-immutable';
import * as types from './auth.actionsTypes';

const initialState = Immutable({
  isLogged: true,
  User: undefined,
});

type ActionType = {
  type: string
}

const reducer = (state: any = initialState, action: ActionType) => {
  switch (action.type) {
    case types.LOGOUT:
      return state.merge({ isLogged: false });
    case types.LOGIN:
      return state.merge({ isLogged: true });
    default:
      return state;
  }
};

export default reducer;
