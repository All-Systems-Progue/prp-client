// Optional attributes are private and will be deleted from the response object
// to the client
export interface IProfile {
  email: string;
  password: string;
}

export default interface IUser {
  firstName: string;
  lastName: string;
  email: string | undefined;
  password?: string;
  role?: string;
  sessions?: {
    token: string;
  }[];
}
