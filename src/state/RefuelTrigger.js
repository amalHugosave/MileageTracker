import { create } from 'zustand'
import { BSON } from 'realm';
const useRefuelTriggerStore = create((set) => ({
    refuelDatas : [],
    curVehId : new BSON.ObjectId(),
    setRefuelState : (newState) => {
        set((state) => (newState))
    },
    addRefuelData : (data)=>{
        set((state)=>({...state, refuelDatas : [...state.refuelDatas , data]}))
    },
    removeRefuelData : (id)=>{
        set((state)=>{
            const newRefData = state.refuelDatas.filter((refData)=> !refData._id.equals(id))
            return ({...state , refuelDatas : newRefData});
        })
    },
    editingRefuelData : (refuelingData)=>{
        set((state) =>{
            let newRefData = [];
            state.refuelDatas.map((refData)=> {
                if(refData._id.equals(refuelingData._id)){
                    newRefData.push(refuelingData);
                }else{
                    newRefData.push(refData);
                }
            })

            return ({...state , refuelDatas : newRefData})
        })
    }
}))

export default useRefuelTriggerStore;