import { create } from 'zustand'
import { BSON } from 'realm';
const useVehicleStore = create((set) => ({
    name: '',
    type : 0,
    image : '',
    engine : '',
    vehId : new BSON.ObjectId(),
    userId : new BSON.ObjectId(),
    setVehicle : (newState) => {
        // console.log("y");
        set((state) => (newState))
    },
    deleteVehicles : ()=>{
        set((state) => ({}))
    }
}))

export default useVehicleStore;