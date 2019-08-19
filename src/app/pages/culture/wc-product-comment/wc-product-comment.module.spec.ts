import { WcProductCommentModule } from './wc-product-comment.module';

describe('WcProductCommentModule', () => {
  let wcProductCommentModule: WcProductCommentModule;

  beforeEach(() => {
    wcProductCommentModule = new WcProductCommentModule();
  });

  it('should create an instance', () => {
    expect(wcProductCommentModule).toBeTruthy();
  });
});
