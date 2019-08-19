import { WcProductSaleModule } from './wc-product-sale.module';

describe('WcProductSaleModule', () => {
  let wcProductSaleModule: WcProductSaleModule;

  beforeEach(() => {
    wcProductSaleModule = new WcProductSaleModule();
  });

  it('should create an instance', () => {
    expect(wcProductSaleModule).toBeTruthy();
  });
});
