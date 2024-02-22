import { validate, ValidationError } from '../../../src/index';
import { Tag } from './Tag';

// 创建一个实例
// const person = new Person('John');
// const person = new Person(123);

// 验证实例
// validate(person).then((errors: ValidationError[]) => {
//   if (errors.length > 0) {
//     console.log('Validation failed. Errors:', errors);
//   } else {
//     console.log('Validation succeeded. Person is valid.');
//   }
// });



const tag = new Tag(['12345', '12345']);
validate(tag).then((errors: ValidationError[]) => {
  if (errors.length > 0) {
    console.log('Validation failed. Errors:', errors);
  } else {
    console.log('Validation succeeded. Person is valid.');
  }
});