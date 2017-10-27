import { ProjetoStartPage } from './app.po';

describe('projeto-start App', function() {
  let page: ProjetoStartPage;

  beforeEach(() => {
    page = new ProjetoStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
