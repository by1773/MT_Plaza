import { WcProductTypeModule } from './wc-product-type.module';

describe('WcProductTypeModule', () => {
  let wcProductTypeModule: WcProductTypeModule;

  beforeEach(() => {
    wcProductTypeModule = new WcProductTypeModule();
  });

  it('should create an instance', () => {
    expect(wcProductTypeModule).toBeTruthy();
  });
});
