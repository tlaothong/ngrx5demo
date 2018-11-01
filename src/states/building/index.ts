import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BuildingState } from './building.reducer';

const getBuildingFeatureState = createFeatureSelector<BuildingState>('buildings');

export const getBuildingAll = createSelector(
    getBuildingFeatureState,
    state => state.buildings,
);

export const getCurrentBuildingId = createSelector(
    getBuildingFeatureState,
    state => state.currentId,
);

export const getCurrentBuilding = createSelector(
    getBuildingAll,
    getCurrentBuildingId,
    (blds, id) => blds.filter(b => b.id == id),
);

export const getCurrentUnits = createSelector(
    getCurrentBuilding,
    blds => blds && blds.length > 0 ? blds[0].units : [],
);