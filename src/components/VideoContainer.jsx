import React, { useEffect, useState } from 'react'
import VideoCards from './VideoCards'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addHomeVideoList } from '../utils/videoSlice'
import ShimmerCard from './SimmerCard'

const VideoContainer = () => {

    const dispatch=useDispatch()
    const videos=useSelector(store=>store.videos.homeVideos)

    useEffect(()=>{
      !videos &&  getVideos();        
    },[])

    const getVideos=async()=>{
        const data=await fetch(YOUTUBE_VIDEO_API)
        const json=await data.json()
        dispatch(addHomeVideoList(json.items))
        
    }
    if (!videos) {
      return (
          <div className="flex flex-wrap p-5 gap-5 px-24">
              {Array(9).fill("").map((_, index) => (
                  <ShimmerCard key={index} /> 
              ))}
          </div>
      );
  }
    return (
    <div className='flex flex-wrap p-5 gap-5 px-24'>
        {videos.map(video=>(
         <Link to={'/watch?v='+video.id} key={video.id}>
                
            <VideoCards info={video} />
    
         </Link>
        ))}
    </div>
  )
}

export default VideoContainer