import { PartialType } from '@nestjs/mapped-types';
import { CreateDotDto } from './create-dot.dto';

export class UpdateDotDto extends PartialType(CreateDotDto) {}
