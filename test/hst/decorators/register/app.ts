import { Post } from './Post';
import { validate } from '../../../../src';

const post = new Post('1','22');

validate(post).then(error => {
  if (error.length > 0) {
    console.log('Validation fail', error);
  } else {
    console.log('Validation success');
  }
})

const test: any[] = ['1'];
console.log(test)