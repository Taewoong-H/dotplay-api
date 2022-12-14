import {
  IsInt,
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  //   @IsInt()
  //   readonly id: number;

  @ApiProperty({ example: 'test@gmail.com', description: 'user email' })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: '1234', description: 'user password' })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  //영어랑 숫자만 가능한 유효성 체크
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts english and number',
  })
  readonly password: string;

  @ApiProperty({ example: 'test1', description: 'user nickname' })
  @IsString()
  readonly nickname: string;

  @ApiProperty({ example: '010-1234-5678', description: 'user phoneNumber' })
  @IsString()
  readonly phoneNumber: string;
}
