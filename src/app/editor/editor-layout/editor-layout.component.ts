import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileHandle, CommonService } from '../../utilities/common_services';
import { EditorService } from '../editor.service';

declare var $: any;

@Component({
  selector: 'app-editor-layout',
  templateUrl: './editor-layout.component.html',
  styleUrls: ['./editor-layout.component.scss'],
})
export class EditorLayoutComponent implements OnInit {
  @ViewChild('profilePicInput', { static: false }) profilePicInput: ElementRef;
  headerPattern = true;
  bodyBg = true;
  coupleLogo = true;
  carouselImages = [];
  currentFilesSection = null;
  files: FileHandle[] = [];
  // filesEvent = null;
  // croppingFile = null;
  templateModel = {
    general_section: {
      isExist: true,
      color: '',
      bgPattern: '',
      bgImageType: '',
      availableImages: [],
    },
    header_section: {
      isExist: true,
      image: '',
      bottomShade: true,
      bgImageType: '',
      availableImages: [
        {
          src: 'assets/images/themes/headerPatterns/header1.png',
          isSelected: false,
        },
        {
          src: 'assets/images/themes/headerPatterns/header1.png',
          isSelected: false,
        },
        {
          src: 'assets/images/themes/headerPatterns/header1.png',
          isSelected: false,
        },
        {
          src: 'assets/images/themes/headerPatterns/header1.png',
          isSelected: false,
        },
        {
          src: 'assets/images/themes/headerPatterns/header1.png',
          isSelected: false,
        },
      ],
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
      logoText: '',
      logoType: '',
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
      topShadow: false,
      bgImageType: '',
      availableImages: [
        {
          src: 'assets/images/themes/headerPatterns/header1.png',
          isSelected: false,
        },
        {
          src: 'assets/images/themes/headerPatterns/header1.png',
          isSelected: false,
        },
        {
          src: 'assets/images/themes/headerPatterns/header1.png',
          isSelected: false,
        },
        {
          src: 'assets/images/themes/headerPatterns/header1.png',
          isSelected: false,
        },
        {
          src: 'assets/images/themes/headerPatterns/header1.png',
          isSelected: false,
        },
      ],
    },
  };

  constructor(
    private commonSrvc: CommonService,
    private editorSrvc: EditorService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {}

  getColorValue($event) {
    this.templateModel[$event.sectionName].color = $event.color;
    this.updateTemplate($event.sectionName);
    // this.editorSrvc.templateSubject.next({
    //   type: 'color',
    //   value: $event,
    // });
  }

  // Header or Footer Section

  shadeChangeForHF(sectionName) {
    this.updateTemplate(sectionName);
  }
  selectImageForHF(index, sectionName) {
    this.templateModel[sectionName].availableImages.forEach((item) => {
      item.isSelected = false;
    });
    this.templateModel[sectionName].availableImages[index].isSelected = true;
    this.templateModel[sectionName].image = this.templateModel[
      sectionName
    ].availableImages[index].src;
    this.updateTemplate(sectionName);
  }

  imageFileEmittedEvent(e) {
    this.currentFilesSection = e.section_name;
    this.files = e.filesList;
    setTimeout(() => {
      $('#ImgCropDialog').modal('show');
    }, 100);
  }

  updateTemplate(sectionName) {
    const templateData = Object.assign({}, this.templateModel);
    templateData['section_key'] = sectionName;
    this.editorSrvc.templateSubject.next({
      type: 'template',
      value: templateData,
    });
  }

  inputControlsChange(sectionName) {
    const templateData = Object.assign({}, this.templateModel);
    templateData['section_key'] = sectionName;
    this.editorSrvc.templateSubject.next({
      type: 'template',
      value: templateData,
    });
  }

  getCarouselImagesFromModal($event) {
    switch (this.currentFilesSection) {
      case 'logo_section':
      case 'dp_section':
        this.templateModel[this.currentFilesSection].image = $event[0].url;
        this.updateTemplate(this.currentFilesSection);
        break;
      default:
        this.templateModel[this.currentFilesSection].availableImages.push({
          src: $event[0].url,
          isCustom: true,
          isSelected: false,
        });
      // code block
    }
  }
}
