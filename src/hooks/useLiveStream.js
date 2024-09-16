import { useState, useEffect } from 'react';
import { GET_LIVE_CHAT_ID, GET_LIVE_CHAT_MESSAGES, LIVE_VIDEO_DETAILS_API } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addMessage } from '../utils/chatSlice';

const useLiveStream = (videoId) => {
  const [liveChatId, setLiveChatId] = useState(null);
  const [liveVideoDetails, setLiveVideoDetails] = useState(null);
  const dispatch = useDispatch();

  // Fetch live chat ID when videoId is available
  useEffect(() => {
    if (videoId) {
      getLiveChatId();
    }
  }, [videoId]);

  useEffect(() => {
    if (liveChatId) {
      const intervalId = setInterval(() => {
        getLiveChatMessages();
      }, 2000);

      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }
  }, [liveChatId]);

  useEffect(() => {
    if (videoId) {
      liveVideoData();
    }
  }, [videoId]);

  const getLiveChatId = async () => {
    try {
      const response = await fetch(
        `${GET_LIVE_CHAT_ID}${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      const liveChatId = data.items[0]?.liveStreamingDetails?.activeLiveChatId;
      setLiveChatId(liveChatId);
    } catch (error) {
      console.error('Error fetching liveChatId:', error);
    }
  };

  const getLiveChatMessages = async () => {
    try {
      const response = await fetch(
        `${GET_LIVE_CHAT_MESSAGES}${liveChatId}&part=snippet,authorDetails&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const data = await response.json();

      // Dispatch each message to Redux store
      data.items.forEach((message) => {
        dispatch(addMessage(message));
      });
    } catch (error) {
      console.error('Error fetching live chat messages:', error);
    }
  };

  const liveVideoData = async () => {
    try {
      const response = await fetch(
        `${LIVE_VIDEO_DETAILS_API}${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const json = await response.json();
      setLiveVideoDetails(json.items[0]);
    } catch (error) {
      console.error('Error fetching live video details:', error);
    }
  };

  return { liveChatId, liveVideoDetails };
};

export default useLiveStream;
