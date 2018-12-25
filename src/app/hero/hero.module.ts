import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HeroService
  ]
})
export class HeroModule { }
