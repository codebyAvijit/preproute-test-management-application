export interface LoginPayload {
  userId: string;
  password: string;
}

export interface User {
  id?: string;
  name?: string;
  userId?: string;
}

export interface LoginResponse {
  success: boolean;
  data: {
    token: string;
    user: User;
  };
  message?: string;
}