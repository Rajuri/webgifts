import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { EditorService } from '../../editor.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-bdt101',
  templateUrl: './bdt101.component.html',
  styleUrls: ['./bdt101.component.scss'],
})
export class Bdt101Component implements OnInit, OnDestroy, AfterViewInit {
  private tmpl$: Subscription;
  templateModel = {
    general_section: {
      isExist: true,
      color: '',
      bgPattern: '',
    },
    header_section: {
      isExist: true,
      image: '',
      bottomShade: '',
    },
    title_section: {
      isExist: true,
      title: '',
      fontStyle: '',
      fontSize: '',
      fontWeight: '',
      color: '',
    },
    logo_section: {
      isExist: true,
      image: '',
    },
    dp_section: {
      isExist: true,
      image: '',
      firstName: '',
      lastName: '',
      color: '',
    },
    slider_section: {
      isExist: true,
      slided: [{ text: '', image: '' }],
    },
    quote_section: {
      isExist: true,
      text: '',
      color: '',
    },
    audio_section: {
      isExist: true,
      bgPattern: '',
    },
    video_section: {
      isExist: true,
      image: '',
      bottomShade: '',
    },
    footer_section: {
      isExist: true,
      image: '',
      topShadow: '',
    },
  };

  slides = [
    { img: 'assets/images/themes/images/slide1.png' },
    { img: 'assets/images/themes/images/slide2.png' },
    { img: 'assets/images/themes/images/slide1.png' },
    { img: 'assets/images/themes/images/slide2.png' },
  ];
  slideConfig = { slidesToShow: 2, slidesToScroll: 2 };

  constructor(
    private editorSrvc: EditorService,
    private elementRef: ElementRef
  ) {
    this.tmpl$ = this.editorSrvc.getTemplateObservable().subscribe(
      (data) => {
        if (data && data.type === 'template') {
          const { section_key, isExists } = data.value;
          const availabelJson = Object.assign(
            {},
            this.templateModel[section_key]
          );
          for (const key in availabelJson) {
            if (availabelJson.hasOwnProperty(key)) {
              availabelJson[key] = data.value[section_key][key];
            }
          }
          this.templateModel[section_key] = Object.assign({}, availabelJson);
          if (section_key === 'general_section') {
            this.elementRef.nativeElement.style.setProperty(
              '--template-theme-color',
              availabelJson.color
            );
          }
        } else if (data && data.type === 'color') {
          this.elementRef.nativeElement.style.setProperty(
            '--template-theme-color',
            data.value
          );
        }
      },
      (error) => {}
    );
  }

  ngOnInit(): void {}

  ngAfterViewInit() {}

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
  ngOnDestroy() {
    this.tmpl$.unsubscribe();
  }
}
