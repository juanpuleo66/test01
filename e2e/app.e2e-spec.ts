import { TestProject2Page } from './app.po';

describe('test-project2 App', () => {
  let page: TestProject2Page;

  beforeEach(() => {
    page = new TestProject2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
