import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo/demo.component';
import { DashboardHeroComponent } from './dashboard-hero/dashboard-hero.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BannerComponent } from './banner/banner.component';
import { RegisterCitizenComponent } from './register-citizen/register-citizen.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DashboardHeroComponent,
    WelcomeComponent,
    BannerComponent,
    RegisterCitizenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
