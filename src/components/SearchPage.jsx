import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RelatedVideos from './RelatedVideos';
import { resetSearchData } from '../utils/videoSlice';

const SearchPage = () => {
    const searchVideos = useSelector(store => store.videos.searchVideos); 
    const dispatch=useDispatch()
    useEffect(()=>{
        return ()=>{
            dispatch(resetSearchData())
        }
    },[])
if(!searchVideos) return null
    return (
        <div className="search-page">
            {/* You can customize this page further */}
            <RelatedVideos videos={searchVideos} />
        </div>
    );
};

export default SearchPage;
