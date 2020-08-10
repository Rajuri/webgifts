import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BirthdayRoutingModule } from './birthday-routing.module';

import { BirthdayLayoutComponent } from './birthday-layout/birthday-layout.component';

@NgModule({
  declarations: [BirthdayLayoutComponent],
  imports: [CommonModule, BirthdayRoutingModule,SlickCarouselModule],
})
export class BirthdayModule {}
