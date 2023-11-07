import { IsEmail, IsString, Matches } from 'class-validator';

export class CreateOneUserDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message:
      'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter and one number',
  })
  readonly password: string;
}
