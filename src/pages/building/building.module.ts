import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildingPage } from './building';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../../states/building/building.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BuildingEffects } from '../../states/building/building.effects';

@NgModule({
  declarations: [
    BuildingPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildingPage),
    StoreModule.forFeature('buildings', reducer),
    EffectsModule.forFeature([
      BuildingEffects,
    ]),
  ],
})
export class BuildingPageModule {}
