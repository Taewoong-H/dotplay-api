import { Test, TestingModule } from '@nestjs/testing';
import { DotService } from './dot.service';

describe('DotService', () => {
  let service: DotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DotService],
    }).compile();

    service = module.get<DotService>(DotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
