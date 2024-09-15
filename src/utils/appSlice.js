import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:'app',
    initialState:{
        sidebar:true,
    },
    reducers:{
        setShowSidebar:(state,action)=>{
          state.sidebar= !state.sidebar
        },
        closeSidebar:(state)=>{
            state.sidebar=false
        }
    }
})

export const{setShowSidebar,closeSidebar}=appSlice.actions;

export default appSlice.reducer;