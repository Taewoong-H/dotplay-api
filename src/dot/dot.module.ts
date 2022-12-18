import { Module } from '@nestjs/common';
import { DotService } from './dot.service';
import { DotController } from './dot.controller';

@Module({
  controllers: [DotController],
  providers: [DotService]
})
export class DotModule {}
