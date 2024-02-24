import { NotEquals } from '../../../../src';

export class Post {
  @NotEquals('test', { each: true })
  username: string[];

  constructor(username: string[]) {
    this.username = username;
  }
}