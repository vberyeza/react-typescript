import axios from 'axios';
import { LOGIN_ADMIN } from '../../utils/endpoints';
import { GetTokenSuccessPayloadType } from '../actions/types';

export const DEFAULT_CONFIG = {
  headers: { 'Content-Type': 'application/json' },
};

export interface AuthorizationAdminResponseType {
  datetime: number;
  info: string;
  misc: string;
  request: string;
  status: number;
}

export interface AuthorizationAdminResponseType200 extends AuthorizationAdminResponseType {
  data: GetTokenSuccessPayloadType;
}

export interface AuthorizationAdminResponseType400 extends AuthorizationAdminResponseType {
  data: {missing: Array<string> } | {invalid: Array<string>};
}
export type AuthorizationAdminResponseType401 = AuthorizationAdminResponseType;

export type AuthorizationAdminResponseTypeCommon =
  AuthorizationAdminResponseType200
  | AuthorizationAdminResponseType400
  | AuthorizationAdminResponseType401;

export async function authorizationAdmin({
  email = '',
  password = '',
} = {}): Promise<AuthorizationAdminResponseTypeCommon> {
  try {
    const body = { email, password };
    const { data } = await axios.post(
      LOGIN_ADMIN,
      body,
      DEFAULT_CONFIG,
    );
    return data;
  } catch (e) {
    return e;
  }
}
