import { NotEquals } from '../../../src';

export class Post {
  @NotEquals('admin')
  username: string;

  constructor(username: string) {
    this.username = username;
  }
}