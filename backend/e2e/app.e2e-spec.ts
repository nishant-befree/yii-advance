import { BackendPage } from './app.po';

describe('backend App', () => {
  let page: BackendPage;

  beforeEach(() => {
    page = new BackendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
