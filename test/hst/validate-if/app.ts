import { validate } from '../../../src/index';
import { User } from './Post';

const user = new User();
user.password = 'password123';
user.confirmPassword = '';

validate(user).then(errors => {
  if (errors.length > 0) {
    console.log('Validation failed:', errors);
  } else {
    console.log('Validation passed');
  }
});
