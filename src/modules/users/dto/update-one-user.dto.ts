import {
  IsEmail,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
} from 'class-validator';

export class UpdateOneUserDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message:
      'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter and one number',
  })
  readonly password: string;
}

export class UpdateOneUserParams {
  @IsString()
  @IsUUID(4)
  readonly id: string;
}
