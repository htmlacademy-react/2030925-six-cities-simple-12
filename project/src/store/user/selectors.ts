import { NameSpace, AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import { UserInfo } from '../../types/user-data';

export const getUser = (state: State): Omit<UserInfo, 'token'> | undefined => state[NameSpace.User].userInfo;
export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
