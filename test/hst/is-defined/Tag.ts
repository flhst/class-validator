import { IsDefined, ValidateIf } from '../../../src';

export class Tag {
  @IsDefined()
  @ValidateIf((_obj, value) => value !== null)
  name: string;


  email: string;

  constructor(name?: string) {
    this.name = name;
  }


}