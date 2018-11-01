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