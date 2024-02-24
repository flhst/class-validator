import { applyDecorators } from '@nestjs/common';
import { type ApiPropertyOptions } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  MinLength,
} from '../../../src/index';

interface IFieldOptions {
  each?: boolean;
  swagger?: boolean;
  nullable?: boolean;
  groups?: string[];
}

interface INumberFieldOptions extends IFieldOptions {
  min?: number;
  max?: number;
  int?: boolean;
  isPositive?: boolean;
}

interface IStringFieldOptions extends IFieldOptions {
  minLength?: number;
  maxLength?: number;
  toLowerCase?: boolean;
  toUpperCase?: boolean;
}

export function StringField(
  options: Omit<ApiPropertyOptions, 'type'> & IStringFieldOptions = {},
): PropertyDecorator {
  const decorators = [Type(() => String), IsString({ each: options.each })];

  // if (options.nullable) {
  //   decorators.push(IsNullable({ each: options.each }));
  // } else {
  //   decorators.push(NotEquals(null, { each: options.each }));
  // }

  // if (options.swagger !== false) {
  //   decorators.push(
  //     ApiProperty({ type: String, ...options, isArray: options.each }),
  //   );
  // }

  if (options.minLength) {
    decorators.push(MinLength(options.minLength, { each: options.each }));
  }

  // if (options.maxLength) {
  //   decorators.push(MaxLength(options.maxLength, { each: options.each }));
  // }

  // if (options.toLowerCase) {
  //   decorators.push(ToLowerCase());
  // }
  //
  // if (options.toUpperCase) {
  //   decorators.push(ToUpperCase());
  // }

  return applyDecorators(...decorators);
}