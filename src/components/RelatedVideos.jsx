// src/components/RelatedVideos.jsx
import React from 'react';
import { dayDifference } from '../utils/constants';
import { Link} from 'react-router-dom';

const RelatedVideos = ({ videos }) => {
    dayDifference()
    return (
        <div>
            <h3 className="text-lg font-bold mb-4 text-white">Related Videos</h3>
            <div className="space-y-4">
                {videos.map((video, index) => (
                    <Link key={index} to={'/watch?v=' + video.id.videoId}>

                        <div className="flex space-x-4">
                            <img
                                src={video?.snippet?.thumbnails?.high?.url}
                                alt="Related Video Thumbnail"
                                className="w-32 h-24 object-cover"
                            />
                            <div className="flex flex-col">
                                <h4 className="font-bold text-white">{video?.snippet?.title}</h4>
                                <p className="text-xs text-white">{video?.snippet?.channelTitle}</p>
                                <p className="text-xs text-white">{dayDifference(video?.snippet?.publishedAt)}</p> {/* Replace with actual data if available */}
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    );
};

export default RelatedVideos;
