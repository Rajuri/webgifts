import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export interface FileHandle {
  file: File;
  url: SafeUrl;
  fileNum?: number;
}

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  generateImageUrlToView(filesList) {
    const files: FileHandle[] = [];
    for (let i = 0; i < filesList.length; i++) {
      const file = filesList[i];
      const url = this.sanitizeFile(file);
      files.push({ file, url, fileNum: i });
    }
    return files;
  }
  sanitizeFile(file) {
    return this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(file)
    );
  }
}

export function base64ToFile(data, filename) {
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
