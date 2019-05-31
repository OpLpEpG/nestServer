import { Test, TestingModule } from '@nestjs/testing';
import { LoadProgrammService } from './load-programm.service';

describe('LoadProgrammService', () => {
  let service: LoadProgrammService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoadProgrammService],
    }).compile();

    service = module.get<LoadProgrammService>(LoadProgrammService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
