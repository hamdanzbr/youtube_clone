import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentsList, addCurrentPlayingVideo, addRelatedVideosList, resetVideoData } from "../utils/videoSlice";
import { EMBEDDED_URL, GET_COMMENT_API, GET_RELATED_VIDEO_API, PLAY_VIDEO_API } from "../utils/constants";

const useVideoData = (id) => {
    const [showMore, setShowMore] = useState(false);
    const dispatch = useDispatch();
    const comments = useSelector((store) => store.videos.comments);
    const relatedVideos = useSelector((store) => store.videos.relatedVideos);
    const videoDetails = useSelector((store) => store.videos.playingVideo);

    // Fetch video details and comments when the component mounts
    useEffect(() => {
        !videoDetails && playVideoInfo();
        !comments && getComments();

        return () => {
            dispatch(resetVideoData());
        };
    }, []); 

    // Fetch related videos after video details are available
    useEffect(() => {
        if (videoDetails?.snippet?.title) {
            getRelatedVideos();
        }
    }, [videoDetails]);

    const playVideoInfo = async () => {
        try {
            const response = await fetch(
                `${PLAY_VIDEO_API}${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
            );
            const data = await response.json();
            dispatch(addCurrentPlayingVideo(data.items[0]));
        } catch (error) {
            console.error("Error fetching video info:", error);
        }
    };

    const getComments = async () => {
        try {
            const response = await fetch(
                `${GET_COMMENT_API}${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&maxResults=100`
            );
            const data = await response.json();
            dispatch(addCommentsList(data.items));
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    const getRelatedVideos = async () => {
        try {
            const response = await fetch(
                `${GET_RELATED_VIDEO_API}${videoDetails.snippet.title}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
            );
            const data = await response.json();
            dispatch(addRelatedVideosList(data.items));
        } catch (error) {
            console.error("Error fetching related videos:", error);
        }
    };

    return {
        showMore,
        setShowMore,
        comments,
        relatedVideos,
        videoDetails,
        videoPlayerUrl: `${EMBEDDED_URL}${id}?&autoplay=1&mute=1`,
    };
};

export default useVideoData;
