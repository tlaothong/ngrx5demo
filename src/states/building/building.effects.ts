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
            units: [
                { id: "1", buildingId: "001", name: "One" },
                { id: "2", buildingId: "001", name: "Two" },
            ],
        },
        {
            id: "002",
            address: "919/1",
            tambon: "Sila",
            district: "Muang Khon Kaen",
            units: [
                { id: "3", buildingId: "002", name: "Three" },
                { id: "4", buildingId: "002", name: "Four" },
            ],
        },
        {
            id: "003",
            address: "919/2",
            tambon: "Sila",
            district: "Muang Khon Kaen",
            units: [
                { id: "5", buildingId: "003", name: "Five" },
                { id: "6", buildingId: "003", name: "Six" },
                { id: "7", buildingId: "003", name: "Seven" },
            ],
        },
      ]))),
  );

}
