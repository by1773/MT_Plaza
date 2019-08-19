import { WcProductModule } from './wc-product.module';

describe('WcProductModule', () => {
  let wcProductModule: WcProductModule;

  beforeEach(() => {
    wcProductModule = new WcProductModule();
  });

  it('should create an instance', () => {
    expect(wcProductModule).toBeTruthy();
  });
});
