import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { SharingService } from '../services/sharing-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: string[] = [];
  valueSelected = false;
  current_sleepiness: string;

  constructor(private sharingService: SharingService) {
  }

  onInputChange(event: MatSliderChange) {
    this.valueSelected = true;
    if(event.value > 0 && event.value < 2.5) {
      this.current_sleepiness = 'Extremely Alert';
    } else if(event.value > 2 && event.value < 4.5) {
      this.current_sleepiness = 'Alert';
    } else if(event.value > 4 && event.value < 6.5) {
      this.current_sleepiness = 'Neither alert nor sleepy';
    } else if(event.value > 6 && event.value < 8.5) {
      this.current_sleepiness = 'Sleepy but no difficulty remaining awake';
    } else if(event.value > 8 && event.value < 10.5) {
      this.current_sleepiness = 'Extremely sleepy';
    };
    this.data.push(this.current_sleepiness);
    this.sharingService.setData(this.data);
  }
}
