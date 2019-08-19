import { WcMaterialOrderModule } from './wc-material-order.module';

describe('WcMaterialOrderModule', () => {
  let wcMaterialOrderModule: WcMaterialOrderModule;

  beforeEach(() => {
    wcMaterialOrderModule = new WcMaterialOrderModule();
  });

  it('should create an instance', () => {
    expect(wcMaterialOrderModule).toBeTruthy();
  });
});
