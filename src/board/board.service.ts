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

  /** 게시물 생성 */
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

  /** 게시물 전체 검색 */
  findAll(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  /** 게시물 전체 검색(작성자) */
  findAllWithUser(user: User): Promise<Board[]> {
    return this.boardRepository.find({
      where: {
        user,
      },
    });
  }

  /** 게시물 상세 조회 */
  findOne(id: number) {
    return this.boardRepository.findOneBy({ id });
  }

  /** 게시물 상세 조회(작성자) */
  async findOneWithUser(id: number, user: User) {
    const isUpdate = 'Y';
    const returnBoard = await this.boardRepository.findOne({
      where: {
        id: id,
        user: user,
      },
    });
    return returnBoard ? { ...returnBoard, isUpdate } : null;
  }

  /** 게시물 수정 */
  async update(id: number, updateBoardDto: UpdateBoardDto) {
    return this.boardRepository.update(id, updateBoardDto);
  }

  /** 게시물 삭제 */
  remove(id: number, user: User) {
    return this.boardRepository.delete({ id, user });
  }
}
