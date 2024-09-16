import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:'videos',
    initialState:{
        homeVideos:null,
        comments:null,
        relatedVideos:null,
        playingVideo:null,
        searchVideos:null,
        liveVideos:null
    },
    reducers:{
        addHomeVideoList:(state,action)=>{
            state.homeVideos=action.payload;
        },
        addCommentsList:(state,action)=>{
            state.comments=action.payload;
        },
        addRelatedVideosList:(state,action)=>{
            state.relatedVideos=action.payload
        },
        addCurrentPlayingVideo:(state,action)=>{
            state.playingVideo=action.payload;
        },
        addSearchVideos:(state,action)=>{
            state.searchVideos=action.payload
        },
        addLiveVideos:(state,action)=>{
            state.liveVideos=action.payload
        },
        resetVideoData: (state) => {
            state.comments = null;
            state.relatedVideos = null;
            state.playingVideo = null;
          }, 
          resetSearchData:(state)=>{
            state.searchVideos=null
          } 
    }
})

export const{addHomeVideoList,addCommentsList,addRelatedVideosList,addCurrentPlayingVideo,addSearchVideos,addLiveVideos,resetVideoData,resetSearchData}=videoSlice.actions;

export default videoSlice.reducer 