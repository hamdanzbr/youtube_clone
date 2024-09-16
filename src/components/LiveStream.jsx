import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { EMBEDDED_URL, formatViewCount } from '../utils/constants';
import LiveChatMessages from './LiveChatMessages';
import LiveChatInput from './LiceChatInput';
import useLiveStream from '../hooks/useLiveStream';
import { SlDislike, SlLike } from "react-icons/sl";
import { RiShareForwardLine } from 'react-icons/ri';


const LiveStream = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  // Use custom hook to fetch live stream data
  const { liveChatId, liveVideoDetails } = useLiveStream(videoId);

  if (!liveVideoDetails) return null;

  const { liveStreamingDetails, snippet } = liveVideoDetails;
  const { concurrentViewers } = liveStreamingDetails;
  const { channelTitle, localized } = snippet;
  const videoUrl = `${EMBEDDED_URL}${videoId}?autoplay=1`;

  return (
    <div className="bg-black flex flex-col lg:flex-row justify-between h-screen px-4 pb-10 lg:px-16">
      {/* Left Section: Video Player */}
      <div className="flex-1 h-full max-w-4xl pt-8 lg:pt-20">
        <iframe
          className="w-full h-72 lg:h-[80%]"
          src={videoUrl}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Live Stream"
        ></iframe>

        {/* Video Details */}
        <div className="mt-4">
          <h1 className="text-white text-xl font-bold">{localized.title}</h1>
          <div className="flex items-center justify-between text-gray-400 mt-2">
            <div className="flex space-x-4">
              <p className="text-sm">{channelTitle}</p>
              <p className="text-sm">{formatViewCount(concurrentViewers)} Watching • Live Now</p>
            </div>
            <div className="flex space-x-4 items-center">
                            {/* Like and Dislike Buttons */}
                            <div className="flex items-center space-x-1 bg-gray-800 text-white rounded-full border-2 p-1">
                                <button className="flex items-center space-x-1 border-r-2 px-3">
                                    <SlLike />
                                </button>
                                <button className="flex items-center px-3 py-2">
                                    <SlDislike />
                                </button>
                            </div>

                            {/* Share Button with Same Size */}
                            <button className="flex items-center space-x-1 bg-gray-800 text-white rounded-full border-2 px-3 py-2">
                                <RiShareForwardLine />
                                <span className="text-white">Share</span>
                            </button>
                        </div>
          </div>
        </div>
      </div>

      {/* Right Section: Live Chat */}
      <div className="w-full lg:w-1/4 h-screen pt-8 lg:pt-20 pl-0 lg:pl-4">
        <div className="h-full bg-gray-900 rounded-lg flex flex-col justify-between">
          <LiveChatMessages />
          <LiveChatInput />
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
