import { WcCrowdfundingTypeModule } from './wc-crowdfunding-type.module';

describe('WcCrowdfundingTypeModule', () => {
  let wcCrowdfundingTypeModule: WcCrowdfundingTypeModule;

  beforeEach(() => {
    wcCrowdfundingTypeModule = new WcCrowdfundingTypeModule();
  });

  it('should create an instance', () => {
    expect(wcCrowdfundingTypeModule).toBeTruthy();
  });
});
