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
        <div className="p-20">
            <RelatedVideos videos={searchVideos} />
        </div>
    );
};

export default SearchPage;
