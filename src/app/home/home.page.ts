import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valueSelected = false;
  // private database: SQLiteObject;

  constructor() {
    // private sqlite: SQLite
    // this.sqlite.create({
    //   name: 'data.db',
    //   location: 'default'
    // })
    //   .then((db: SQLiteObject) => {
    //     db.executeSql('create table danceMoves(name VARCHAR(32))', [])
    //       .then(() => console.log('Executed SQL'))
    //       .catch(e => console.log(e));
    //   })
    //   .catch(e => console.log(e));
  }

  onInputChange(event: MatSliderChange) {
    console.log('This is emitted as the thumb slides');
    this.valueSelected = true;
    console.log(event.value);
  }

}
