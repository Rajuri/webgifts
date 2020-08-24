import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { CommonService, FileHandle } from 'src/app/utilities/common_services';
declare var $: any;

@Component({
  selector: 'app-image-file',
  templateUrl: './image-file.component.html',
  styleUrls: ['./image-file.component.scss'],
})
export class ImageFileComponent implements OnInit {
  @Input() imageComponentId: any;
  @Input() numOfImages: string;
  @Output() imageFileEmit = new EventEmitter<any>();
  @ViewChild('imageFileInput', { static: false }) imageFileInput: ElementRef;

  files = [];
  constructor(private commonSrvc: CommonService) {}

  ngOnInit(): void {}

  selectProfilePic(e) {
    if (e && e.target && e.target.files && e.target.files.length) {
      this.files = this.commonSrvc.generateImageUrlToView(e.target.files);
      if (this.files.length > parseInt(this.numOfImages)) {
        this.files = [];
        alert(`Images cant be greater than ${this.numOfImages}`);
        return;
      }
      this.imageFileEmit.emit({
        section_name: this.imageComponentId,
        filesList: this.files,
      });
    }
  }
  openBrowseFileWindow() {
    this.imageFileInput.nativeElement.click();
  }
  filesDropped(files: FileHandle[]): void {
    if (files.length > parseInt(this.numOfImages)) {
      this.files = [];
      alert(`Images cant be greater than ${this.numOfImages}`);
      return;
    }
    this.files = [...this.files, ...files];
    this.imageFileEmit.emit({
      section_name: this.imageComponentId,
      filesList: this.files,
    });
  }
}
