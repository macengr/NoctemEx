import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page3PageRoutingModule } from './page3-routing.module';

import { Page3Page } from './page3.page';
import { MatSliderModule } from '@angular/material/slider';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page3PageRoutingModule,
    MatSliderModule,
  ],
  declarations: [Page3Page],
  providers: [SQLite]
})
export class Page3PageModule {}
