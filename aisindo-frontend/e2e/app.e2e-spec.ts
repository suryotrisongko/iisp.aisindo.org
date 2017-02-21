import { LagoonFrontPage } from './app.po';

describe('lagoon-front App', function() {
  let page: LagoonFrontPage;

  beforeEach(() => {
    page = new LagoonFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
