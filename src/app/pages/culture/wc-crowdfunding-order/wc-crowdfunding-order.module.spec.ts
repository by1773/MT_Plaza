import { WcCrowdfundingOrderModule } from './wc-crowdfunding-order.module';

describe('WcCrowdfundingOrderModule', () => {
  let wcCrowdfundingOrderModule: WcCrowdfundingOrderModule;

  beforeEach(() => {
    wcCrowdfundingOrderModule = new WcCrowdfundingOrderModule();
  });

  it('should create an instance', () => {
    expect(wcCrowdfundingOrderModule).toBeTruthy();
  });
});
