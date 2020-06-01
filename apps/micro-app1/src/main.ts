import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { singleSpaAngular } from 'single-spa-angular';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  template: '<single-spa-angular-micro-app1 />',
  bootstrapFunction: () => platformBrowserDynamic().bootstrapModule(AppModule),
  NgZone,
  domElementGetter: () => document.querySelector('.micro-app1-host'),
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
