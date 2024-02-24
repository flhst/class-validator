import { IsLongerThan } from './validator.decorators';

export class Post {
  title: string;

  @IsLongerThan('title', {
    /* you can also use additional validation options, like "groups" in your custom validation decorators. "each" is not supported */
    message: 'Text must be longer than the title',
  })
  text: string;


  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
  }
}