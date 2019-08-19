import { WcMaterialTypeModule } from './wc-material-type.module';

describe('WcMaterialTypeModule', () => {
  let wcMaterialTypeModule: WcMaterialTypeModule;

  beforeEach(() => {
    wcMaterialTypeModule = new WcMaterialTypeModule();
  });

  it('should create an instance', () => {
    expect(wcMaterialTypeModule).toBeTruthy();
  });
});
