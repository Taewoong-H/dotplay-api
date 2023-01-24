import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import { GetUser } from 'src/util/decorators/get-user.decorator';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@ApiTags('board')
@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() createBoardDto: CreateBoardDto,
    @GetUser() user: User,
  ): Promise<Board> {
    return await this.boardService.create(createBoardDto, user);
  }

  @Get('all')
  findAll(): Promise<Board[]> {
    return this.boardService.findAll();
  }

  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard('jwt'))
  @Get('user/all')
  findAllWithUser(@GetUser() user: User): Promise<Board[]> {
    return this.boardService.findAllWithUser(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardService.findOne(+id);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard('jwt'))
  @Get('user/:id')
  async findOneWithUser(@Param('id') id: string, @GetUser() user: User) {
    const userBoard = await this.boardService.findOneWithUser(+id, user);
    return userBoard || this.boardService.findOne(+id);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @GetUser() user: User,
    @Body() updateBoardDto: UpdateBoardDto,
  ) {
    const userBoard = await this.boardService.findOneWithUser(+id, user);
    if (userBoard) {
      return this.boardService.update(+id, updateBoardDto);
    }
    throw new BadRequestException();
  }

  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string, @GetUser() user: User) {
    return this.boardService.remove(+id, user);
  }
}
