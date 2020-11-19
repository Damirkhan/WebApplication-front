import {Role} from './role';

export class User {
  id: number;
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: Role;
  active: number;
  imageProfileName: string;
  constructor() {
  }
}
