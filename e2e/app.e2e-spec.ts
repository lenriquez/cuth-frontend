import { CuthPage } from './app.po';

describe('cuth App', function() {
  let page: CuthPage;

  beforeEach(() => {
    page = new CuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
