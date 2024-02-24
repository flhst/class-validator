import { Post } from './Post';
import { validate } from '../../../src';
import { Tag } from './Tag';

// const post = new Post(null, null);
//
// validate(post).then(error => {
//   if (error.length > 0) {
//     console.log('Validation fail', error);
//   } else {
//     console.log('Validation success');
//   }
// })

// const test = new Post('');
// validate(test).then(error => {
//   if (error.length > 0) {
//     console.log('Validation fail', error);
//   } else {
//     console.log('Validation success');
//   }
// })

let tag = new Tag(null);
validate(tag).then(error => {
  if (error.length > 0) {
    console.log('Validation fail', error);
  } else {
    console.log('Validation success');
  }
})

tag = new Tag();
validate(tag).then(error => {
  if (error.length > 0) {
    console.log('Validation fail', error);
  } else {
    console.log('Validation success');
  }
})
