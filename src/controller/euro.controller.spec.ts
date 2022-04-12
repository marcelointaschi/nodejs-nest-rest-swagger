import { Test, TestingModule } from '@nestjs/testing';
import { EuroController } from './euro.controller';

describe('EuroController', () => {
  let controller: EuroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EuroController],
    }).compile();

    controller = module.get<EuroController>(EuroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
