import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  ipadShow = false;
  iphoneShow = true;
  ipadDisplay() {
    if (!this.ipadShow) {
      this.ipadShow = !this.ipadShow;
    }
    this.iphoneShow = false;
  }
  iphoneDisplay() {
    if (!this.iphoneShow) {
      this.iphoneShow = !this.iphoneShow;
    }
    this.ipadShow = false;
  }
  constructor() { }
  ngOnInit(): void {
  }

}
