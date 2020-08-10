import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorLayoutComponent } from './editor-layout/editor-layout.component';
import { Bdt101Component } from './birthday-themes/bdt101/bdt101.component';
import { Att101Component } from './anniversary-themes/att101/att101.component';
import { EditorRoutingModule } from './editor-routing.module';

@NgModule({
  declarations: [EditorLayoutComponent, Bdt101Component, Att101Component],
  imports: [
    CommonModule,
    EditorRoutingModule
  ]
})
export class EditorModule { }
