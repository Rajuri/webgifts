import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  base64ToFile,
  FileHandle,
  CommonService,
} from '../../utilities/common_services';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-cropper-modal',
  templateUrl: './cropper-modal.component.html',
  styleUrls: ['./cropper-modal.component.scss'],
})
export class CropperModalComponent implements OnInit {
  @Input() carouselFiles: any;
  @Output() saveImagesEmitter = new EventEmitter<any>();
  // currentPreviewImage = 0;
  currentSelectedImageNum = 0;
  currentSelectedImage = null;
  currentCroppingImage = null;
  currentCroppedImage = null;
  currentSelectedImageName = null;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.previewImage();
  }

  previewImage(file?: FileHandle) {
    if (file) {
      this.currentSelectedImageNum = file.fileNum;
    }
    this.currentSelectedImage = this.carouselFiles[
      this.currentSelectedImageNum
    ].url;
  }

  cropImage() {
    this.currentCroppingImage = this.carouselFiles[
      this.currentSelectedImageNum
    ].file;
  }

  // Confirm Cropping
  confirmImageCrop() {
    const croppedFile = this.carouselFiles[this.currentSelectedImageNum]
      .croppedImage;
    this.carouselFiles[
      this.currentSelectedImageNum
    ].url = this.commonService.sanitizeFile(croppedFile);
    this.currentCroppingImage = null;
    this.previewImage();
  }

  // Cancel Cropping
  cancelImageCrop() {}

  imageCropped(event: ImageCroppedEvent) {
    this.currentCroppedImage = base64ToFile(
      event.base64,
      this.currentSelectedImageName
    );
    this.carouselFiles[
      this.currentSelectedImageNum
    ].croppedImage = this.currentCroppedImage;
  }
  // show cropper
  imageLoaded() {}
  // cropper ready
  cropperReady() {}
  // show message
  loadImageFailed() {}

  saveCarouselImages() {
    this.saveImagesEmitter.emit(this.carouselFiles);
  }

  closePopup() {}
}
