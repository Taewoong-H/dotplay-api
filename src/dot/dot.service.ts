import { Injectable } from '@nestjs/common';
import { CreateDotDto } from './dto/create-dot.dto';
import { UpdateDotDto } from './dto/update-dot.dto';

@Injectable()
export class DotService {
  create(createDotDto: CreateDotDto) {
    return 'This action adds a new dot';
  }

  findAll() {
    return `This action returns all dot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dot`;
  }

  update(id: number, updateDotDto: UpdateDotDto) {
    return `This action updates a #${id} dot`;
  }

  remove(id: number) {
    return `This action removes a #${id} dot`;
  }
}
