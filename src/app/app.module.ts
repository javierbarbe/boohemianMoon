import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CargandoInterceptor } from './shared/interceptors/cargando.interceptor';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CarruselComponent } from './shared/components/carrusel/carrusel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    MainComponent,
    HeaderComponent,
    CarruselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
 providers: [
    CargandoInterceptor,
   {
        provide: HTTP_INTERCEPTORS,
        useExisting: CargandoInterceptor,
        multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
