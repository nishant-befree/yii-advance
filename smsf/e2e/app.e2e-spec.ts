import { SMSFPage } from './app.po';

describe('SMSF App', () => {
  let page: SMSFPage;

  beforeEach(() => {
    page = new SMSFPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
