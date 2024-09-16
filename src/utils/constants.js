export const buttonList=["All","Music","AI","Algorithms","Podcasts","React Routers","Mammooty","Tamil Cinema","Argentina National Football Team","Debates","Thrillers","Goalkeepers","Skills","Mixes",'Computers','Iphones','Sports Leagues','Cristiano Ronaldo']

export const YOUTUBE_LOGO="https://i.postimg.cc/BQy4Xznm/like-png-youtube-image-black-and-white-youtube-logo-11562934763iodizqbykm-removebg-preview.png"

export const NOTIFICATION_IMG="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_EXtATKPKHh9NQshUwkh-cm0WVBl5sI5dA&s"

export const USER_IMG="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`



export const formatViewCount = (count) => {
    if (count >= 1_000_000) {
      return (count / 1_000_000).toFixed(1) + 'M';
    } else if (count >= 1_000) {
      return (count / 1_000).toFixed(1) + 'K';
    } else {
      return count;
    }
  };

  export const dayDifference = (dateString) => {
    const publishedDate = new Date(dateString);
    const currentDate = new Date();
    
    const timeDifferenceInMs = currentDate - publishedDate;
    const seconds = Math.floor(timeDifferenceInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30); // Roughly 30 days in a month
  
    if (hours < 24) {
      return `${hours} hours ago`;
    } else if (days < 7) {
      return `${days} days ago`;
    } else if (weeks < 4) {
      return `${weeks} weeks ago`;
    } else {
      return `${months} months ago`;
    }
  };
  

  export const formatDuration = (duration) => {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
  
    // Parse duration string
    const regex = /PT(\d+H)?(\d+M)?(\d+S)?/;
    const matches = duration.match(regex);
  
    if (matches[1]) hours = parseInt(matches[1].replace('H', ''));
    if (matches[2]) minutes = parseInt(matches[2].replace('M', ''));
    if (matches[3]) seconds = parseInt(matches[3].replace('S', ''));
  
    // Format duration as hh:mm:ss or mm:ss
    let formattedDuration = '';
    if (hours > 0) {
      formattedDuration += `${hours}:`;
      formattedDuration += `${minutes < 10 ? '0' : ''}${minutes}:`;
    } else {
      formattedDuration += `${minutes}:`;
    }
    formattedDuration += `${seconds < 10 ? '0' : ''}${seconds}`;
  
    return formattedDuration;
  };
  


export const EMBEDDED_URL="https://www.youtube.com/embed/"
export const PLAY_VIDEO_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id="
export const GET_COMMENT_API="https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId="
export const GET_RELATED_VIDEO_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=" 
export const SEARCH_SUGGESTION_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" 
export const GET_LIVE_VIDEO_API='https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&maxResults=50&key='
export const LIVE_VIDEO_DETAILS_API = 'https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails&id=';


export const OFFSET_LIVE_CHAT=15

export const GET_LIVE_CHAT_ID='https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id='

export const GET_LIVE_CHAT_MESSAGES='https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId='

 

