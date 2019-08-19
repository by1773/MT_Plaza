import { WcMaterialLibModule } from './wc-material-lib.module';

describe('WcMaterialLibModule', () => {
  let wcMaterialLibModule: WcMaterialLibModule;

  beforeEach(() => {
    wcMaterialLibModule = new WcMaterialLibModule();
  });

  it('should create an instance', () => {
    expect(wcMaterialLibModule).toBeTruthy();
  });
});
