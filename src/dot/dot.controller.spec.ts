import { Test, TestingModule } from '@nestjs/testing';
import { DotController } from './dot.controller';
import { DotService } from './dot.service';

describe('DotController', () => {
  let controller: DotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DotController],
      providers: [DotService],
    }).compile();

    controller = module.get<DotController>(DotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
