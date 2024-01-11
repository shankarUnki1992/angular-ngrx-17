import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule, provideStore } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(), importProvidersFrom(StoreModule, StoreModule.forRoot({
    count: counterReducer
  })), provideStoreDevtools({ maxAge: 25, logOnly: true })]
};
