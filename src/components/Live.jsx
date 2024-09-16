import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addLiveVideos } from '../utils/videoSlice';
import { GET_LIVE_VIDEO_API } from '../utils/constants';
import ShimmerCard from './SimmerCard';

const Live = () => {
  const [liveVideos, setLiveVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchLiveVideos();
  }, []);

  const fetchLiveVideos = async () => {
    try {
      const response = await fetch(
        `${GET_LIVE_VIDEO_API}${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      setLiveVideos(data.items);
      dispatch(addLiveVideos(data.items));
    } catch (error) {
      console.error('Error fetching live videos:', error);
    }
  };

  if(!liveVideos)return <ShimmerCard/>

  return (
    <div className='pt-9 px-4 h-screen'>
     <div className='flex p-3 items-center gap-2'>
     <img className='rounded-full' src="https://yt3.googleusercontent.com/mn2j_Mu_8sSnDB2uzs2gK5O2PnCS-yDo3LtFe7UdcNDCbmSOks1b6FKExG83_0gda_79yKt27A=s120-c-k-c0x00ffffff-no-rj" alt="" />
          <h2 className='text-white text-2xl font-bold mb-4'> Live Videos</h2>
    
     </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {liveVideos.map((video) => (
          <div key={video.id.videoId} className='relative border border-gray-700 rounded-lg overflow-hidden'>
            <Link to={`/livestream/?v=${video.id.videoId}`}>
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className='w-full h-40 object-cover'
              />
              <div className='absolute bottom-0 bg-gradient-to-t from-black to-transparent p-2 w-full'>
                <h3 className='text-white font-semibold text-sm truncate'>{video.snippet.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Live;
