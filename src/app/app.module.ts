import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';

import localeEs from '@angular/common/locales/es';
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';

registerLocaleData(localeEs, 'es');
registerLocaleData(localePt, 'pt');
registerLocaleData(localeEn, 'en')

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
