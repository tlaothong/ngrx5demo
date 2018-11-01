import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuildingState } from '../../states/building/building.reducer';
import { Store } from '@ngrx/store';
import { getCurrentUnits } from '../../states/building';

@IonicPage()
@Component({
  selector: 'page-building-unit',
  templateUrl: 'building-unit.html',
})
export class BuildingUnitPage {

  public units$ = this.store.select(getCurrentUnits);

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<BuildingState>) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingUnitPage');
  }

}
