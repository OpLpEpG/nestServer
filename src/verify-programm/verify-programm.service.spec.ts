import { Test, TestingModule } from '@nestjs/testing';
import { VerifyProgrammService } from './verify-programm.service';

describe('VerifyProgrammService', () => {
  let service: VerifyProgrammService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VerifyProgrammService],
    }).compile();

    service = module.get<VerifyProgrammService>(VerifyProgrammService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
