namespace Models {

    export interface BuildingSample {
        id: string,
        address: string,
        tambon: string,
        district: string,
        units: BuildingUnit[],
    }

    export interface BuildingUnit {
        id: string,
        buildingId: string,
        name: string,
    }

}