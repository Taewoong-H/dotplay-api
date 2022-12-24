import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly nickname: string;

  @IsString()
  readonly phoneNumber: string;

  @IsString()
  readonly useYn: string;
}
