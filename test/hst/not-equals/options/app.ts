import { validate } from '../../../../src';
import { Post } from './Post';

let post = new Post(['1','2','3']);
validate(post).then(error => {
  if (error.length > 0) {
    console.log('Validation fail: ' + error);
  } else {
    console.log('Validation success');
  }
})

post = new Post(['a','test', 'admin']);
console.log(post.username);
validate(post).then(error => {
  if (error.length > 0) {
    console.log('Validation fail: ', error);
  } else {
    console.log('Validation success');
  }
})