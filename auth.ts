import { auth } from '../types';
import {
  GetTokenErrorActionType,
  GetTokenParametersActionType,
  GetTokenRequestActionType,
  GetTokenSuccessActionType, GetTokenSuccessPayloadType,
} from './types';

const {
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_ERROR,
  SET_PARAMETERS,
} = auth;

// actions async
export const getTokenRequest = (payload: { email: string; password: string}): GetTokenRequestActionType => ({
  type: GET_TOKEN_REQUEST,
  payload,
});

export const getTokenSuccess = (payload: GetTokenSuccessPayloadType): GetTokenSuccessActionType => ({
  type: GET_TOKEN_SUCCESS,
  payload,
});

export const getTokenError = (payload: any /* todo: add correct type */): GetTokenErrorActionType => ({
  type: GET_TOKEN_ERROR,
  payload,
});

// action static
export const setParameters = (): GetTokenParametersActionType => ({
  type: SET_PARAMETERS,
});
