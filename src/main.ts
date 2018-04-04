import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
window['CESIUM_BASE_URL'] = 'https://github.com/SUNHuiyao/Mobius_Cesium/tree/master/docs/assets/cesium';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
