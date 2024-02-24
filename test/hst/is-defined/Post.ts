import { IsDefined } from '../../../src';

export class Post {
  @IsDefined()
  name: string;

  @IsDefined()
  email: string;

  constructor(name: string, email?: string) {
    this.name = name;
    this.email = email;
  }
}