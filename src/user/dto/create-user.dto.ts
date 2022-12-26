import { IsInt, IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  //   @IsInt()
  //   readonly id: number;

  @ApiProperty({ example: 'test@gmail.com', description: 'user email' })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: '1234', description: 'user password' })
  @IsString()
  readonly password: string;

  @ApiProperty({ example: 'test1', description: 'user nickname' })
  @IsString()
  readonly nickname: string;

  @ApiProperty({ example: '010-1234-5678', description: 'user phoneNumber' })
  @IsString()
  readonly phoneNumber: string;
}
