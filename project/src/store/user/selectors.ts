import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { UsersData } from '../../types/user-data';

export const getUser = (state: State): Omit<UsersData, 'token'> | undefined => state[NameSpace.User].userData;

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
