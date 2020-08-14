import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickerComponent } from './picker/picker.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [PickerComponent],
  exports: [PickerComponent],
  imports: [CommonModule, ColorPickerModule],
  entryComponents: [],
})
export class ColorPickModule {}
