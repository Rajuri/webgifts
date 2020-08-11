import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditorLayoutComponent } from './editor-layout/editor-layout.component';
import { Bdt101Component } from './birthday-themes/bdt101/bdt101.component';

const routes: Routes = [
  {
    path: '',
    component: EditorLayoutComponent,
    children:[
      {
        path: '',
        component: Bdt101Component,
      }
    ]
  },
  {
    path: 'bdt1',
    component: Bdt101Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorRoutingModule {}
