import { BuildingActionsType, BuildingTypes } from "./building.actions";

export interface BuildingState {
    currentId: string,
    buildings: Models.BuildingSample[],
}

const initialState: BuildingState = {
    currentId: null,
    buildings: [],
};

export function reducer(state : BuildingState = initialState, action: BuildingActionsType) : BuildingState {
    switch (action.type) {
        case BuildingTypes.LoadSuccess:
            return {
                ...state,
                buildings: action.payload,
            }
        case BuildingTypes.SelectBuilding:
            return {
                ...state,
                currentId: action.payload,
            }
        default:
            return state;
    }
}