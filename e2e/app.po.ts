export class ProjPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('proj-app p')).getText();
  }
}
