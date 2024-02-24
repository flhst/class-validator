import { Post } from './Post';
import { validate } from '../../../src';

const post = new Post('admin');

validate(post).then(error => {
  if (error.length > 0) {
    console.log('Validation fail:', error);
  } else {
    console.log('Validation successful')
  }
})