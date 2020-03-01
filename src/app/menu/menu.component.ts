import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isSidebarOpen: boolean = false;
  clickEvent(){
      this.isSidebarOpen = !this.isSidebarOpen;       
  }
  constructor() { }

  ngOnInit() {
  }

}
