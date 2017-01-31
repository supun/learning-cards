import { CardsPage } from './app.po';

describe('cards App', function() {
  let page: CardsPage;

  beforeEach(() => {
    page = new CardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
