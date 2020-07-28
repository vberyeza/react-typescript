import { Reducer } from 'react';

import {
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_ERROR,
  SET_PARAMETERS,
} from '../types/auth';
import { AuthActionTypes } from '../actions/types';
import { AuthState } from './types';

export type AuthReducer = Reducer<AuthState, AuthActionTypes>;

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  accessToken: null,
  role: null,
  error: {
    type: null,
    message: null,
  },
  data: null,
};


const authReducer: AuthReducer = (
  state: AuthState = initialState,
  action: AuthActionTypes,
) => {
  switch (action.type) {
    case GET_TOKEN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        accessToken: action.payload.tokens.access,
        role: action.payload.role,
        data: action.payload,
        error: {
          type: null,
          message: null,
          data: null,
        },
      };
    case GET_TOKEN_ERROR:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        error: {
          type: 'login_error',
          message: 'Неверный логин и/или пароль',
          data: action.payload,
        },
      };
    case SET_PARAMETERS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
