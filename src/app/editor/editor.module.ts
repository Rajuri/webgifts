import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ImageCropperModule } from 'ngx-image-cropper';
import { EditorLayoutComponent } from './editor-layout/editor-layout.component';
import { Bdt101Component } from './birthday-themes/bdt101/bdt101.component';
import { Att101Component } from './anniversary-themes/att101/att101.component';
import { EditorRoutingModule } from './editor-routing.module';
import { CropperModalComponent } from '../components/cropper-modal/cropper-modal.component';

import { ColorPickModule } from '../color-pick/color-pick.module';

import { DragDirective } from '../utilities/common_directives';

@NgModule({
  declarations: [
    DragDirective,
    EditorLayoutComponent,
    Bdt101Component,
    Att101Component,
    CropperModalComponent,
  ],
  imports: [
    CommonModule,
    EditorRoutingModule,
    ImageCropperModule,
    SlickCarouselModule,
    ColorPickModule,
  ],
})
export class EditorModule {}
