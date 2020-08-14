import { ImageCroppedEvent } from 'ngx-image-cropper';

function base64ToFile(data, filename) {
  const arr = data.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

class BaseCropperService {
  croppedImage: any = null;
  fileName: any = null;
  Constrcutor(fileName) {
    this.fileName = fileName;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = base64ToFile(event.base64, this.fileName);
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
}

export class CropperService extends BaseCropperService {
  file: any = null;
  Constrcutor() {}
}
