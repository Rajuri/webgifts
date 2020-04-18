import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirthdayLayoutComponent } from './birthday-layout/birthday-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BirthdayLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirthdayRoutingModule {}
