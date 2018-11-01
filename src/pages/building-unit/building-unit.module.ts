import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildingUnitPage } from './building-unit';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../../states/building/building.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BuildingEffects } from '../../states/building/building.effects';

@NgModule({
  declarations: [
    BuildingUnitPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildingUnitPage),
    StoreModule.forFeature('buildings', reducer),
    EffectsModule.forFeature([
      BuildingEffects,
    ]),
  ],
})
export class BuildingUnitPageModule {}
