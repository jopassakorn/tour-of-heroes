import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './user.service';
import { MasterService } from './master.service';
import { AuthInterceptor } from './auth-interceptor';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    MainMenuComponent
  ],
  providers: [
    UserService,
    MasterService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class CoreModule { }
