import { Component, OnInit } from '@angular/core';
import { SharingService } from '../services/sharing-service.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  reasonsArray = [];
  reasons = '';
  valueSelected = true;
  data: string[] = [];
  is1Selected = false;
  is2Selected = false;
  is3Selected = false;
  is4Selected = false;
  is5Selected = false;
  is6Selected = false;
  is7Selected = false;
  is8Selected = false;
  is9Selected = false;
  is10Selected = false;

  constructor(private sharingService: SharingService) { }

  ngOnInit() {
    this.data = this.sharingService.getData();
  }

  check1Selected() {
    this.is1Selected = !this.is1Selected;
    if (this.is1Selected === true) {
      this.reasonsArray.push('Racing Thoughts');
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Racing Thoughts');
     }
  }
  check2Selected() {
    this.is2Selected = !this.is2Selected;
    if (this.is2Selected === true) {
      this.reasonsArray.push('Anxiety');
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Anxiety');
    }
  }
  check3Selected() {
    this.is3Selected = !this.is3Selected;
    if (this.is3Selected === true) {
      this.reasonsArray.push('Nightmares');
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Nightmares');
    }
  }
  check4Selected() {
    this.is4Selected = !this.is4Selected;
    if (this.is4Selected === true) {
      this.reasonsArray.push('Pop/Soda');
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Pop/Soda');
    }
  }
  check5Selected() {
    this.is5Selected = !this.is5Selected;
    if (this.is5Selected === true) {
      this.reasonsArray.push('Light');
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Light');
    }
  }
  check6Selected() {
    this.is6Selected = !this.is6Selected;
    if (this.is6Selected === true) {
      this.reasonsArray.push('Stress');
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Stress');
    }
  }
  check7Selected() {
    this.is7Selected = !this.is7Selected;
    if (this.is7Selected === true) {
      this.reasonsArray.push('Noise');
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Noise');
    }
  }
  check8Selected() {
    this.is8Selected = !this.is8Selected;
    if (this.is8Selected === true) {
      this.reasonsArray.push('Work');
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Work');
    }
  }
  check9Selected() {
    this.is9Selected = !this.is9Selected;
    if (this.is9Selected === true) {
      this.reasonsArray.push('Spending time with Friends');
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Spending time with Friends');
    }
  }
  check10Selected() {
    this.is10Selected = !this.is10Selected;
    if (this.is10Selected === true) {
      this.reasonsArray.push('Obligations');
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Obligations');
    }
  }

  onNext() {
    this.reasons = this.reasonsArray.join(' ');
    this.data.push(this.reasons);
    this.sharingService.setData(this.data);
  }
}
