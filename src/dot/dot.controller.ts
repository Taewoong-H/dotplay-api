import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DotService } from './dot.service';
import { CreateDotDto } from './dto/create-dot.dto';
import { UpdateDotDto } from './dto/update-dot.dto';

@Controller('dot')
export class DotController {
  constructor(private readonly dotService: DotService) {}

  @Post()
  create(@Body() createDotDto: CreateDotDto) {
    return this.dotService.create(createDotDto);
  }

  @Get()
  findAll() {
    return this.dotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dotService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDotDto: UpdateDotDto) {
    return this.dotService.update(+id, updateDotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dotService.remove(+id);
  }
}
