import { Ng2BootstrapFaultPage } from './app.po';

describe('ng2-bootstrap-fault App', function() {
  let page: Ng2BootstrapFaultPage;

  beforeEach(() => {
    page = new Ng2BootstrapFaultPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
