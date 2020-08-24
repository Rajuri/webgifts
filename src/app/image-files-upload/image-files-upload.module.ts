import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageFileComponent } from './image-file/image-file.component';
import { DragDirective } from '../utilities/common_directives';

@NgModule({
  declarations: [ImageFileComponent, DragDirective],
  exports: [ImageFileComponent, DragDirective],
  imports: [CommonModule],
})
export class ImageFilesUploadModule {}
