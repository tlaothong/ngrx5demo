import { Action } from "@ngrx/store";

export enum BuildingTypes {
    Load = "[BLD] Load",
    LoadSuccess = "[BLD] Load Success",
    LoadFailed = "[BLD] Load Failed",
    SelectBuilding = "[BLD] Select",
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

export class SelectBuilding implements Action {
    readonly type = BuildingTypes.SelectBuilding;

    constructor(public payload: string) {
    }
}

export type BuildingActionsType =
    LoadBuilding
    | LoadBuildingSuccess
    | SelectBuilding
    ;