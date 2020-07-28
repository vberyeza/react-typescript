import {
  GET_TOKEN_ERROR,
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  SET_PARAMETERS,
} from '../types/auth';

import {
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_ERROR,
} from '../types/logout';

import {
  CHANGE_MODAL_WINDOW,
  GET_WIDTH_WINDOW,
  HIDE_NOTIFICATION,
} from '../types/utils';
import { RoleUserType } from '../../utils/constants';

// types actions async
export type GetTokenRequestActionType = {
  type: typeof GET_TOKEN_REQUEST;
  payload: { email: string; password: string };
};

export interface GetTokenSuccessPayloadType {
  role: RoleUserType;
  tokens: {
    access: string;
    refresh: string;
  };
}

export type GetTokenSuccessActionType = {
  type: typeof GET_TOKEN_SUCCESS;
  payload: GetTokenSuccessPayloadType;
};

export type GetTokenErrorActionType = {
  type: typeof GET_TOKEN_ERROR;
  payload: any;
};


// types actions static
export type GetTokenParametersActionType = {
  type: typeof SET_PARAMETERS;
};

export type AuthActionTypes = GetTokenRequestActionType | GetTokenSuccessActionType
| GetTokenErrorActionType | GetTokenParametersActionType;

export type ChangeModalWindowActionType = {
  type: typeof CHANGE_MODAL_WINDOW;
  payload: boolean;
};

export type GetWidthWindowActionType = {
  type: typeof GET_WIDTH_WINDOW;
  payload: number;
};

export interface HideNotificationActionType{
  type: typeof HIDE_NOTIFICATION;
  payload: null | string;
}

export type LogOutRequestActionType = {
  type: typeof LOG_OUT_REQUEST;
};

export type LogOutSuccessActionType = {
  type: typeof LOG_OUT_SUCCESS;
};
export type LogOutErrorActionType = {
  type: typeof LOG_OUT_ERROR;
};

export type UtilsActionTypes = ChangeModalWindowActionType | GetWidthWindowActionType | HideNotificationActionType;
