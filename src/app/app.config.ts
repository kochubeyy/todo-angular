import { provideAnimations } from "@angular/platform-browser/animations";
import { TuiRootModule } from "@taiga-ui/core";
import {ApplicationConfig, ENVIRONMENT_INITIALIZER, importProvidersFrom, inject} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {NgxsModule} from '@ngxs/store';
import {CompanyState} from './store/states/company.state';
import { environment } from '../environments/environment';
import {ToastHandler} from './store/handler/toast.handler';
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {NgxsRouterPluginModule} from "@ngxs/router-plugin";

export const appConfig: ApplicationConfig = {
  providers: [
        provideAnimations(),
        provideRouter(routes),
        provideHttpClient(),
        importProvidersFrom(
          TuiRootModule,
          NgxsModule.forRoot([CompanyState], {
            developmentMode: !environment.production
          }),
          NgxsFormPluginModule.forRoot(),
          NgxsRouterPluginModule.forRoot()
        ),
        {
          provide: ENVIRONMENT_INITIALIZER,
          multi: true,
          useValue: () => inject(ToastHandler),
        }
    ]
};
