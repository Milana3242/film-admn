export interface SignUp {
  email: string;
  password: string;
  name: string;
}
export interface SignIn {
  email: string;
  password: string;

}

export interface Token{
    accessToken: string
  }

  export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
  }
