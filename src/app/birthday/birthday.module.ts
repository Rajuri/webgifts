import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirthdayRoutingModule } from './birthday-routing.module';

import { BirthdayLayoutComponent } from './birthday-layout/birthday-layout.component';

@NgModule({
  declarations: [BirthdayLayoutComponent],
  imports: [CommonModule, BirthdayRoutingModule],
})
export class BirthdayModule {}
