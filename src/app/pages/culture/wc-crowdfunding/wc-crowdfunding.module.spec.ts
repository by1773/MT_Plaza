import { WcCrowdfundingModule } from './wc-crowdfunding.module';

describe('WcCrowdfundingModule', () => {
  let wcCrowdfundingModule: WcCrowdfundingModule;

  beforeEach(() => {
    wcCrowdfundingModule = new WcCrowdfundingModule();
  });

  it('should create an instance', () => {
    expect(wcCrowdfundingModule).toBeTruthy();
  });
});
