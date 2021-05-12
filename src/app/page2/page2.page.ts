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
  data: any = {reasons: this.reasons};
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
      console.log(this.reasonsArray);
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Racing Thoughts');
      console.log(this.reasonsArray);
     }
  }
  check2Selected() {
    this.is2Selected = !this.is2Selected;
    if (this.is2Selected === true) {
      this.reasonsArray.push('Anxiety');
      console.log(this.reasonsArray);
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Anxiety');
      console.log(this.reasonsArray);
    }
  }
  check3Selected() {
    this.is3Selected = !this.is3Selected;
    if (this.is3Selected === true) {
      this.reasonsArray.push('Nightmares');
      console.log(this.reasonsArray);
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Nightmares');
      console.log(this.reasonsArray);
    }
  }
  check4Selected() {
    this.is4Selected = !this.is4Selected;
    if (this.is4Selected === true) {
      this.reasonsArray.push('Pop/Soda');
      console.log(this.reasonsArray);
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Pop/Soda');
      console.log(this.reasonsArray);
    }
  }
  check5Selected() {
    this.is5Selected = !this.is5Selected;
    if (this.is5Selected === true) {
      this.reasonsArray.push('Light');
      console.log(this.reasonsArray);
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Light');
      console.log(this.reasonsArray);
    }
  }
  check6Selected() {
    this.is6Selected = !this.is6Selected;
    if (this.is6Selected === true) {
      this.reasonsArray.push('Stress');
      console.log(this.reasonsArray);
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Stress');
      console.log(this.reasonsArray);
    }
  }
  check7Selected() {
    this.is7Selected = !this.is7Selected;
    if (this.is7Selected === true) {
      this.reasonsArray.push('Noise');
      console.log(this.reasonsArray);
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Noise');
      console.log(this.reasonsArray);
    }
  }
  check8Selected() {
    this.is8Selected = !this.is8Selected;
    if (this.is8Selected === true) {
      this.reasonsArray.push('Work');
      console.log(this.reasonsArray);
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Work');
      console.log(this.reasonsArray);
    }
  }
  check9Selected() {
    this.is9Selected = !this.is9Selected;
    if (this.is9Selected === true) {
      this.reasonsArray.push('Spending time with Friends');
      console.log(this.reasonsArray);
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Spending time with Friends');
      console.log(this.reasonsArray);
    }
  }
  check10Selected() {
    this.is10Selected = !this.is10Selected;
    if (this.is10Selected === true) {
      this.reasonsArray.push('Obligations');
      console.log(this.reasonsArray);
    } else {
      this.reasonsArray = this.reasonsArray.filter(e => e !== 'Obligations');
      console.log(this.reasonsArray);
    }
  }

  onNext() {
    this.reasons = this.reasonsArray.join(' ');
    console.log(this.reasons);
  }


}
