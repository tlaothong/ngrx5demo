import { BuildingActionsType, BuildingTypes } from "./building.actions";

export interface BuildingState {
    currentId: number,
    buildings: Models.BuildingSample[],
}

const initialState: BuildingState = {
    currentId: 0,
    buildings: [],
};

export function reducer(state : BuildingState = initialState, action: BuildingActionsType) : BuildingState {
    switch (action.type) {
        case BuildingTypes.LoadSuccess:
            return {
                ...state,
                buildings: action.payload,
            }
        default:
            return state;
    }
}