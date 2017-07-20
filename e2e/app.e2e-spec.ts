import { CoreAngularPage } from './app.po';

describe('core-angular App', () => {
  let page: CoreAngularPage;

  beforeEach(() => {
    page = new CoreAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
