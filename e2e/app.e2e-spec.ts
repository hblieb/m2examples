import { M2examplesPage } from './app.po';

describe('m2examples App', () => {
  let page: M2examplesPage;

  beforeEach(() => {
    page = new M2examplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
