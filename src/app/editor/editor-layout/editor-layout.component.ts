import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileHandle, CommonService } from '../../utilities/common_services';
import { ImageCroppedEvent } from 'ngx-image-cropper';

declare var $: any;

@Component({
  selector: 'app-editor-layout',
  templateUrl: './editor-layout.component.html',
  styleUrls: ['./editor-layout.component.scss'],
})
export class EditorLayoutComponent implements OnInit {
  headerPattern : boolean = true;
  bodyBg : boolean = true;
  @ViewChild('profilePicInput', { static: false }) profilePicInput: ElementRef;
  carouselImages = [];
  files: FileHandle[] = [];
  filesEvent = null;
  croppingFile = null;

  constructor(private commonSrvc: CommonService) {}

  ngOnInit(): void {}

  showModal(): void {
    this.croppingFile = this.files[1].file;
    // $("#myModal").modal('show');
  }

  selectProfilePic(e) {
    if (e && e.target && e.target.files && e.target.files.length) {
      this.files = this.commonSrvc.generateImageUrlToView(e.target.files);
      setTimeout(() => {
        $('#ImgCropDialog').modal('show');
      }, 100);
    }
  }
  openBrowseFileWindow() {
    this.profilePicInput.nativeElement.click();
  }
  filesDropped(files: FileHandle[]): void {
    this.files = [...this.files, ...files];
    setTimeout(() => {
      $('#ImgCropDialog').modal('show');
    }, 100);
    // this.croppingFile = this.files[0].file;
  }

  getCarouselImagesFromModal($event) {
    this.carouselImages = $event;
  }
}
