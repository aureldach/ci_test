import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AppComponent} from './app';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
	disableDeprecatedForms(),
	provideForms(),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
])
.catch(err => console.error(err));
