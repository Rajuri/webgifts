import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { ThemesComponent } from './themes/themes.component';

@NgModule({
  declarations: [HomeLayoutComponent, ThemesComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
