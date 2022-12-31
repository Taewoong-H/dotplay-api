import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateBoardDto } from './create-board.dto';
import { IsEnum } from 'class-validator';

export class UpdateBoardDto extends PartialType(CreateBoardDto) {
  @ApiProperty({ example: '사용여부', description: 'board useYn' })
  @IsEnum(['Y', 'N'])
  readonly useYn: string;
}
