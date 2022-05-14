import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { AuthInterceptor } from './modules/auth/interceptor/auth.interceptor';
import { NavigationComponent } from './components/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
