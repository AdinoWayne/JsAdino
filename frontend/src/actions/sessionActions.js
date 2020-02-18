export const SESSION_LOGIN = 'SESSION_LOGIN';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';
export const INFOMATION_LOGIN = 'INFOMATION_LOGIN';

export const login = () => (dispatch) => dispatch({
  type: SESSION_LOGIN
});

export const logout = () => (dispatch) => dispatch({
  type: SESSION_LOGOUT
});

export const loginAction = (dispatch) => {
  return {
      type: INFOMATION_LOGIN,
      data: dispatch,
  }
}