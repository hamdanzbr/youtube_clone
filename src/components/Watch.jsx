import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "../utils/appSlice";
import { dayDifference, formatViewCount } from "../utils/constants";
import { SlDislike, SlLike } from "react-icons/sl";
import { RiShareForwardLine } from "react-icons/ri";
import CommentSection from "../components/CommentSection"; // Adjust path as needed
import RelatedVideos from "../components/RelatedVideos"; // New component
import useVideoData from "../hooks/useVideoData";
import ShimmerCard from "./SimmerCard";

const Watch = () => {
    const [params] = useSearchParams();
    const id = params.get("v");
    const dispatch = useDispatch();

    // Use the custom hook
    const {showMore,setShowMore,comments,relatedVideos,videoDetails,videoPlayerUrl} = useVideoData(id);

    useEffect(() => {
        dispatch(closeSidebar());
    }, []);

    if (!videoDetails || !comments || !relatedVideos) return (
    <div className="h-screen">
        <ShimmerCard/>
        </div>
        )

    const { snippet, statistics } = videoDetails;
    const { title, publishedAt, description, channelTitle } = snippet;
    const { viewCount, likeCount } = statistics;

    return (
        <div className="flex flex-col lg:flex-row p-4 mt-10 lg:p-8">
            {/* Left Section - Video and Description */}
            <div className="flex-1 lg:mr-6">
                {/* Video Player */}
                <div className="relative w-full h-64 lg:h-96 bg-black">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={videoPlayerUrl}
                        title="Video Player"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Video Info */}
                <div className="mt-4">
                    {/* Video Title */}
                    <h2 className="text-xl font-bold text-white">{title}</h2>

                    {/* View Count and Published Date */}
                    <div className="flex items-center justify-start text-gray-600 mt-2">
                        <p className="text-sm text-white">
                            {formatViewCount(viewCount)} views • {dayDifference(publishedAt)} days ago
                        </p>
                    </div>

                    {/* Channel Details and Like/Share Buttons */}
                    <div className="flex justify-between items-center mt-4 text-gray-600">
                        {/* Left Side: Channel Details */}
                        <div className="flex items-center">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="Channel Avatar"
                                className="w-10 h-10 rounded-full"
                            />
                            <div className="ml-2">
                                <p className="font-semibold text-white">{channelTitle}</p>
                            </div>
                        </div>

                        {/* Right Side: Like, Dislike, and Share Buttons */}
                        <div className="flex space-x-4 items-center">
                            {/* Like and Dislike Buttons */}
                            <div className="flex items-center space-x-1 bg-gray-800 text-white rounded-full border-2 p-1">
                                <button className="flex items-center space-x-1 border-r-2 px-3">
                                    <SlLike />
                                    <span className="text-white">{formatViewCount(likeCount)}</span>
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

                    {/* Description Box */}
                    <div className="border-2 mt-2 rounded-lg p-2 font-bold bg-gray-900">
                        <div className="flex flex-col text-gray-600">
                            <p className="mt-2 text-white">
                                {showMore ? description : description.substring(0, 150)}...
                            </p>
                            <button
                                className="text-blue-600 font-bold mt-1"
                                onClick={() => setShowMore(!showMore)}
                            >
                                {showMore ? "Show less" : "Show more"}
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

                {/* Comments Section */}
                <CommentSection comments={comments} />
            </div>

            {/* Right Sidebar - Related Videos */}
            <div className="lg:w-1/3 mt-8 lg:mt-0">
                <RelatedVideos videos={relatedVideos} />
            </div>
        </div>
    );
};

export default Watch;
