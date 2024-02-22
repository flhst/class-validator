import { IsNotEmpty, ValidateIf } from '../../../src/decorator/decorators';

export class User {
  @IsNotEmpty()
  password: string;

  @ValidateIf((_obj, value) => _obj.password !== 'password123')
  @IsNotEmpty({ message: 'Confirm password should not be empty' })
  confirmPassword: string;
}
