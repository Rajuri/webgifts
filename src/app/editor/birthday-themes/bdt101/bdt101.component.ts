import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bdt101',
  templateUrl: './bdt101.component.html',
  styleUrls: ['./bdt101.component.scss'],
})
export class Bdt101Component implements OnInit {
  slides = [
    {img: "assets/images/themes/images/slide1.png"},
    {img: "assets/images/themes/images/slide2.png"},
    {img: "assets/images/themes/images/slide1.png"},
    {img: "assets/images/themes/images/slide2.png"}
  ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };

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
