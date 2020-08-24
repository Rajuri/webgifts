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
import { ImageFilesUploadModule } from '../image-files-upload/image-files-upload.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { EditorService } from './editor.service';

@NgModule({
  declarations: [
    EditorLayoutComponent,
    Bdt101Component,
    Att101Component,
    CropperModalComponent,
  ],
  imports: [
    CommonModule,
    EditorRoutingModule,
    ImageCropperModule,
    ColorPickModule,
    ImageFilesUploadModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [EditorService],
})
export class EditorModule {}
