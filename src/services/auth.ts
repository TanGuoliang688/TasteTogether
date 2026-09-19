import { callFunction } from './cloud';

export interface LoginResult {
  openid: string;
}

export function login() {
  return callFunction<LoginResult>('login');
}