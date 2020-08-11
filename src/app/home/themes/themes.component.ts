import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss'],
})
export class ThemesComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  goToEventsPage() {
    console.log('dd');
    this._router.navigate(['../editor']);
  }
}
