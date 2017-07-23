import { YoutubeClonePage } from './app.po';

describe('youtube-clone App', () => {
  let page: YoutubeClonePage;

  beforeEach(() => {
    page = new YoutubeClonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
