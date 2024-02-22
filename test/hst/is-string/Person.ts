import { IsString } from '../../../src/decorator/decorators';

export class Person {
  @IsString({ message: 'Name should be a string'})
  name: string | number;

  constructor(name: string | number) {
    this.name = name;
  }
}