import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SharingService } from '../services/sharing-service.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  data: string[] = [];
  valueSelected = false;
  current_sleepiness: string;
  reasons: string;
  amount_bothered: string;
  private database: SQLiteObject;

  constructor(private sqlite: SQLite, private sharingService: SharingService) { }

  ngOnInit() {
    this.data = this.sharingService.getData();
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.database = db;
        db.executeSql('CREATE TABLE IF NOT EXISTS sleepdata(id INTEGER PRIMARY KEY AUTOINCREMENT, \
           current_sleepiness TEXT, reasons TEXT, amount_bothered TEXT);', [])
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }


  onInputChange(event: MatSliderChange) {
    this.valueSelected = true;
    if(event.value > 0 && event.value < 2.5) {
      this.amount_bothered = 'Almost never';
    } else if(event.value > 2 && event.value < 4.5) {
      this.amount_bothered = 'A few days';
    } else if(event.value > 4 && event.value < 6.5) {
      this.amount_bothered = 'Several days';
    } else if(event.value > 6 && event.value < 8.5) {
      this.amount_bothered = 'More than half the days';
    } else if(event.value > 8 && event.value < 10.5) {
      this.amount_bothered = 'Almost everyday';
    };
    this.addSleepData();
  }

  //input to database
  addSleepData() {
    this.current_sleepiness = this.data[0];
    this.reasons = this.data[1];
    const dailydata = [this.current_sleepiness, this.reasons, this.amount_bothered];
    return this.database.executeSql('INSERT INTO sleepdata (current_sleepiness, reasons, amount_bothered) VALUES (?, ?, ?)', dailydata)
    .then(res => {
      this.getDBData();
    });
  }

  getDBData() {
    let items = [];
    this.database.executeSql('SELECT * FROM items ').then((r) => {
      if (r.res.rows.length > 0) {
        for (let i = 0; i < r.res.rows.length; i++) {
          items.push(r.res.rows.item(i));
        }
      }
    });
  }

}
