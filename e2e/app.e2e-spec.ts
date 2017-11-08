import { VrHeroAframePage } from './app.po';

describe('vr-hero-aframe App', () => {
  let page: VrHeroAframePage;

  beforeEach(() => {
    page = new VrHeroAframePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
