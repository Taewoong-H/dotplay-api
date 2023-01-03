import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBoardDto {
  @ApiProperty({ example: '제목', description: 'board title' })
  @IsString()
  readonly title: string;

  @ApiProperty({ example: '설명', description: 'board description' })
  @IsString()
  readonly description: string;

  @ApiProperty({ example: '도트', description: 'board dot' })
  @IsString()
  readonly dot: string;
}
