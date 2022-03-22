import ITheme from 'src/common/types/theme/ITheme';
import * as types from './types.actionsTypes';

export const changeTheme = (theme: ITheme) => ({
  type: types.CHANGE_THEME,
  payload: theme,
});
