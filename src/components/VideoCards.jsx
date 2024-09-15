import React from 'react';
import { dayDifference, formatViewCount, formatDuration } from '../utils/constants';

const VideoCard = ({ info }) => {
    if (!info) return null 

    const { snippet, statistics, contentDetails } = info;
    const { thumbnails, description, channelTitle, publishedAt } = snippet;
    const { viewCount } = statistics;
    const { duration } = contentDetails;

    const formattedDuration = formatDuration(duration);

    // Calculate the number of days since the video was published
    const daysAgo = dayDifference(publishedAt);

    return (
        <div className="max-w-xs w-[490px] rounded overflow-hidden shadow-lg bg-black cursor-pointer">
            {/* Video Thumbnail */}
            <div className="relative">
                <img
                    className="w-full h-48 object-cover"
                    src={thumbnails?.standard?.url}
                    alt="Video Thumbnail"
                />
                {/* Video Duration */}
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1 py-0.5 rounded">
                    {formattedDuration}
                </span>
            </div>

            {/* Video Info */}
            <div className="flex p-3 text-white">
                {/* Channel Avatar */}
                <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://via.placeholder.com/100"
                    alt="Channel Avatar"
                />

                <div className="ml-3">
                    {/* Video Title */}
                    <h3 className="text-sm font-bold line-clamp-2 text-white text-wrap">
                        {description}
                    </h3>

                    {/* Channel Name */}
                    <p className="text-xs text-white">{channelTitle}</p>

                    {/* View Count and Date */}
                    <p className="text-xs text-white">
                        {formatViewCount(viewCount)} • {daysAgo} days ago
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
