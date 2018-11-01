import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { BuildingTypes, LoadBuildingSuccess } from './building.actions';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class BuildingEffects {

  constructor(private actions$: Actions) {
    console.log('Create BuildingEffects Provider');
  }

  @Effect()
  public loadBuildings$ : Observable<Action> = this.actions$.pipe(
      ofType(BuildingTypes.Load),
      mergeMap(action => Observable.of(new LoadBuildingSuccess([
        {
            id: "001",
            address: "919",
            tambon: "Sila",
            district: "Muang Khon Kaen",
        },
        {
            id: "002",
            address: "919/1",
            tambon: "Sila",
            district: "Muang Khon Kaen",
        },
        {
            id: "003",
            address: "919/2",
            tambon: "Sila",
            district: "Muang Khon Kaen",
        },
      ]))),
  );

}
