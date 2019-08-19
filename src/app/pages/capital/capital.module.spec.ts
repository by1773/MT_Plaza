import { CapitalModule } from './capital.module';

describe('CapitalModule', () => {
  let capitalModule: CapitalModule;

  beforeEach(() => {
    capitalModule = new CapitalModule();
  });

  it('should create an instance', () => {
    expect(capitalModule).toBeTruthy();
  });
});
