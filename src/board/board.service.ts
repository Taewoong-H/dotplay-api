import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
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

  async create(createBoardDto: CreateBoardDto, user: User) {
    const { title, description, dot } = createBoardDto;

    const board = this.boardRepository.create({
      title,
      description,
      dot,
      user,
    });

    await this.boardRepository.save(board);
    return board;
  }

  findAll(user: User): Promise<Board[]> {
    return this.boardRepository.find({
      where: {
        user,
      },
    });
  }

  findOne(id: number) {
    return this.boardRepository.findOneBy({ id });
  }

  async update(id: number, updateBoardDto: UpdateBoardDto) {
    return this.boardRepository.update(id, updateBoardDto);
  }

  remove(id: number, user: User) {
    return this.boardRepository.delete({ id, user });
  }
}
