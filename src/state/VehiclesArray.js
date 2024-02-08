import { create } from 'zustand'

const useVehicleArrayStore = create((set) => ({
    VehiclesArray : [],
    setVehicleState : (newState) => {
        set((state) => (newState))
    },
    addVehicleState : (vehicle) => {
        set((state) => ({VehiclesArray : [...state.VehiclesArray , vehicle]}))
    },
    deleteVehiclesState : ()=>{
        set((state) =>  ({VehiclesArray : []}))   
    }
}))

export default useVehicleArrayStore;