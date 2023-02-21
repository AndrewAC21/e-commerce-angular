import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent: string = 'https://www.w3schools.com/w3css/img_lights.jpg';

  onLoaded(msg: string): void {
    console.log('log padre', msg);
  }
}
