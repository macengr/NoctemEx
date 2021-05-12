import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onInputChange(event: MatSliderChange) {
    console.log('This is emitted as the thumb slides');
    console.log(event.value);
  }

}
