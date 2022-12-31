import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async create(createBoardDto: CreateBoardDto) {
    const { title, description, dot } = createBoardDto;

    const board = this.boardRepository.create({
      title,
      description,
      dot,
    });

    await this.boardRepository.save(board);
    return board;
  }

  findAll(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  findOne(id: number) {
    return this.boardRepository.findOneBy({ id });
  }

  async update(id: number, updateBoardDto: UpdateBoardDto) {
    return this.boardRepository.update(id, updateBoardDto);
  }

  remove(id: number) {
    return this.boardRepository.delete(id);
  }
}
