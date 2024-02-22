import { StringField } from '../decorators/field.decorators';

export class Tag {
  @StringField( { minLength: 4, each: true } )
  name: string[] | number;

  constructor(name: string[] | number) {
    this.name = name;
  }
}