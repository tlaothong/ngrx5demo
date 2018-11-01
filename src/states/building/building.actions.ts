import { Action } from "@ngrx/store";

export enum BuildingTypes {
    Load = "[BLD] Load",
    LoadSuccess = "[BLD] Load Success",
    LoadFailed = "[BLD] Load Failed",
}

export class LoadBuilding implements Action {
    readonly type = BuildingTypes.Load;

    constructor() {
    }
}

export class LoadBuildingSuccess implements Action {
    readonly type = BuildingTypes.LoadSuccess;

    constructor(public payload: Models.BuildingSample[]) {
    }
}

export type BuildingActionsType =
    LoadBuilding
    | LoadBuildingSuccess
    ;