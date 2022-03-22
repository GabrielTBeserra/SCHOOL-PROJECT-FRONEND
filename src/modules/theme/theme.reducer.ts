import Immutable from 'seamless-immutable';
import ITheme from 'src/common/types/theme/ITheme';
import { ThemeLight } from '../../styles/Pallet';
import * as types from './types.actionsTypes';

const initialState = Immutable({
  theme: ThemeLight,
});

type ActionType = {
  type: string,
  payload: ITheme
}

const reducer = (state: any = initialState, action: ActionType) => {
  switch (action.type) {
    case types.CHANGE_THEME:
      return state.merge({ theme: action.payload });
    default:
      return state;
  }
};

export default reducer;
