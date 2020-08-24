import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss'],
})
export class PickerComponent implements OnInit {
  @Output() colorEmitter = new EventEmitter<any>();
  @Input() colorSection: string;
  color = '';

  constructor() {}

  ngOnInit(): void {}
  getColorValue() {
    this.colorEmitter.emit({
      color: this.color,
      sectionName: this.colorSection,
    });
  }
}
