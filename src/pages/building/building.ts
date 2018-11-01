import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store, select } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { getBuildingAll } from '../../states/building';
import { LoadBuilding } from '../../states/building/building.actions';

@IonicPage()
@Component({
  selector: 'page-building',
  templateUrl: 'building.html',
})
export class BuildingPage {

  public buildings$ = this.store.pipe(select(getBuildingAll));

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<BuildingState>) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingPage');
    this.store.dispatch(new LoadBuilding());
  }

}
