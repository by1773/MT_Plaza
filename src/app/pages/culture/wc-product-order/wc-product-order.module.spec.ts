import { WcProductOrderModule } from './wc-product-order.module';

describe('WcProductOrderModule', () => {
  let wcProductOrderModule: WcProductOrderModule;

  beforeEach(() => {
    wcProductOrderModule = new WcProductOrderModule();
  });

  it('should create an instance', () => {
    expect(wcProductOrderModule).toBeTruthy();
  });
});
