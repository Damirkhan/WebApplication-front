import {User} from './user';

export class Post {
  id: number;
  title: string;
  text: string;
  author: User;
  constructor() {
  }
}
