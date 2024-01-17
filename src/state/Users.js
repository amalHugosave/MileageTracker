import { create } from 'zustand'

const useUserStore = create((set) => ({
    name: '',
    nickname : '',
    email : '',
    passcode : '',
    setUser : (newState) => {
        // console.log("y");
        set((state) => (newState))
    },
    setPasscode : (passcode) =>{
        set((state) =>({passcode : passcode}))
    }
}))

export default useUserStore;