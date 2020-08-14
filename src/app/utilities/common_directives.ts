import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';

import { CommonService, FileHandle } from './common_services';

@Directive({
  selector: '[appDrag]',
})
export class DragDirective {
  @Output() draggedfiles: EventEmitter<FileHandle[]> = new EventEmitter();
  @Output() browsefile: EventEmitter<any> = new EventEmitter();

  @HostBinding('style.background') private background = '#eee';

  constructor(public commonSrvc: CommonService) {}

  @HostListener('click', ['$event']) public onClick(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.browsefile.emit();
  }

  @HostListener('dragover', ['$event']) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    const displayFiles = this.commonSrvc.generateImageUrlToView(
      evt.dataTransfer.files
    );
    this.draggedfiles.emit(displayFiles);
  }
}
