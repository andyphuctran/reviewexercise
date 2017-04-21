import { ReviewexercisePage } from './app.po';

describe('reviewexercise App', () => {
  let page: ReviewexercisePage;

  beforeEach(() => {
    page = new ReviewexercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
