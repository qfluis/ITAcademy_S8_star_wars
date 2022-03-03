import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavesModule } from './naves/naves.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginModule } from './login/login.module';
import { LoginService } from './login/login.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavesModule,
    LoginModule
  ],
  providers: [LoginService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
