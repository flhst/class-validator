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

const person = {
  name: "John",
  age: 30,
  address: "123 Main St"
};

const propertyName = "age";
const propertyValue = (person as any)[propertyName];

console.log(propertyValue); // 输出: 30