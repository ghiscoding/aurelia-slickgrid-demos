import { route, type Routeable } from '@aurelia/router';
import { customElement } from 'aurelia';
// @ts-ignore
import AureliaLogo from './assets/aurelia-logo.png?url';
import template from './my-app.html?raw';
import './styles.scss';

const myRoutes: Routeable[] = [
  { path: '', redirectTo: 'example1' },
  { path: 'example1', component: () => import('./examples/slickgrid/example1.js'), title: '1- Basic Grid / 2 Grids' },
  { path: 'example2', component: () => import('./examples/slickgrid/example2.js'), title: '2- Single Custom Locale' },
  { path: 'example3', component: () => import('./examples/slickgrid/example3.js'), title: '3- Master/Detail Grids' },
];
@route({
  routes: myRoutes,
  fallback: 'example1',
})
@customElement({ name: 'my-app', template })
export class MyApp {
  aureliaLogo = AureliaLogo;
  routes = myRoutes;

  attached() {
    this.addGitHubStarsLogo();

    // scroll to active link route, there's probably a better way to do this but couldn't find lifecycle for it
    setTimeout(() => {
      const linkElm = document.querySelector('.nav-link.active');
      linkElm?.scrollIntoView({ block: 'nearest' });
    }, 45);
  }

  addGitHubStarsLogo() {
    // GitHub logo with Stars shouldn't be created while testing in Cypress (which always wait few seconds even minutes to load the logo)
    // <a href="https://github.com/ghiscoding/slickgrid-universal"><img src="https://img.shields.io/github/stars/ghiscoding/slickgrid-universal?style=social"></a>
    const decodedCookie = decodeURIComponent(document.cookie);
    if (decodedCookie !== 'serve-mode=cypress') {
      const ghStarLinkElm = document.createElement('a');
      ghStarLinkElm.href = 'https://github.com/ghiscoding/slickgrid-universal/tree/master/frameworks/aurelia-slickgrid';

      const imgStarElm = document.createElement('img');
      imgStarElm.src = 'https://img.shields.io/github/stars/ghiscoding/slickgrid-universal?style=social';

      const ghButtonContainerElm = document.querySelector('.github-button-container');
      if (ghButtonContainerElm && !ghButtonContainerElm.querySelector('a')) {
        ghStarLinkElm.appendChild(imgStarElm);
        ghButtonContainerElm.appendChild(ghStarLinkElm);
      }
    }
  }
}
