import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {
  constructor() {}

  @Input() imageUrl: string = '';
  @Output() loaded = new EventEmitter<string>();

  defaultImg: string = 'https://www.w3schools.com/howto/img_avatar.png';

  ngOnInit(): void {}
  imgLoaded(): void {
    console.log('log hijo');
    this.loaded.emit('loaded');
  }
  imgError(): void {
    this.imageUrl = this.defaultImg;
  }
}
