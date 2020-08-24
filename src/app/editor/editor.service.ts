import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class EditorService {
  templateSubject = new Subject<any>();
  private templateObservable = this.templateSubject.asObservable();

  constructor() {}

  getTemplateObservable() {
    return this.templateObservable;
  }
}
