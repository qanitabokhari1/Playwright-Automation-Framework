export interface User {
  username: string;
  password: string;
}

export const standardUserCredentials: User = {
  username: 'standard_user',
  password: 'secret_sauce',
};

export const invalidUserCredentials: User = {
  username: 'invalid_user',
  password: 'invalid_password',
};
