import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bdt101',
  templateUrl: './bdt101.component.html',
  styleUrls: ['./bdt101.component.scss'],
})
export class Bdt101Component implements OnInit {
  slides = [
    { img: 'http://placehold.it/350x150/000000' },
    { img: 'http://placehold.it/350x150/111111' },
    { img: 'http://placehold.it/350x150/333333' },
    { img: 'http://placehold.it/350x150/666666' },
  ];
  slideConfig = { slidesToShow: 2, slidesToScroll: 2 };

  constructor() {}

  ngOnInit(): void {}

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}
