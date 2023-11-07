/* eslint-disable @typescript-eslint/ban-types */
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ValidationError, validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException({
        message: 'Validation error',
        fields: this.getConstraints(errors),
      });
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }

  private getConstraints(errors: ValidationError[]) {
    const fields = {};

    for (const error of errors) {
      const property = error.property;
      const constraints = error.constraints;

      if (property) {
        const field = {};
        for (const constraintKey in constraints) {
          field[constraintKey] = constraints[constraintKey];
        }
        fields[property] = field;
      }

      if (error.children && error.children.length > 0) {
        fields[property] = this.getConstraints(error.children);
      }

      if (error.constraints && Object.keys(error.constraints).length > 0) {
        fields[property] = error.constraints;
      }
    }

    return fields;
  }
}
