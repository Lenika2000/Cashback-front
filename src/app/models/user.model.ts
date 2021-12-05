export interface Client {
  login?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}

export type Role = 'ROLE_SHOP' | 'ROLE_ADMIN' | 'ROLE_CLIENT';

export interface AuthResponseMessage {
  login: string;
  id: number;
  roles: Role[];
  accessToken: string;
}
