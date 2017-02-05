import { LearningCardsPage } from './app.po';

describe('learning-cards App', function() {
  let page: LearningCardsPage;

  beforeEach(() => {
    page = new LearningCardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
