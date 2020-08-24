import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditorLayoutComponent } from './editor-layout/editor-layout.component';
import { Bdt101Component } from './birthday-themes/bdt101/bdt101.component';
import { PreviewComponent } from './preview/preview.component';
const routes: Routes = [
  {
    path: '',
    component: EditorLayoutComponent,
    children: [
      {
        path: '',
        component: Bdt101Component,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bdt101',
      },
    ],
  },
  {
    path: 'preview',
    component: PreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorRoutingModule {}
