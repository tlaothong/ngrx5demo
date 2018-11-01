import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store, select } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { LoadBuilding } from '../../states/building/building.actions';
import { getBuildingAll } from '../../states/building';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private store: Store<BuildingState>) {

  }

  public goBuilding() {
    this.navCtrl.push("BuildingPage");
  }

}
