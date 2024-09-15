export const buttonList=["All","Music","AI","Algorithms","Podcasts","React Routers","Mammooty","Tamil Cinema","Argentina National Football Team","Debates","Thrillers","Goalkeepers","Skills","Mixes",'Computers','Iphones','Sports Leagues','Cristiano Ronaldo']

export const HAMBURGER_LOGO="https://i.postimg.cc/XNQDH0fv/hamburgerheader-810x810-removebg-preview.png"

export const YOUTUBE_LOGO="https://i.postimg.cc/BQy4Xznm/like-png-youtube-image-black-and-white-youtube-logo-11562934763iodizqbykm-removebg-preview.png"

export const NOTIFICATION_IMG="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_EXtATKPKHh9NQshUwkh-cm0WVBl5sI5dA&s"

export const USER_IMG="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"

// const API_KEY = 'AIzaSyD4m_TNOw74wmxyAUAU13EjL5Xe98CFtk4'
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`

// export const PLAYING_VIDEO_DETAILS='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key='+process.env.REACT_APP_YOUTUBE_API_KEY

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
    // Create a Date object for the specific date
    const publishedDate = new Date(dateString);
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const timeDifference = today - publishedDate;

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
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
  

//   export const RELATED_VIDEOS_API= "https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=5rOiW_xY-kc&type=video&key={YOUR_API_KEY}"

export const EMBEDDED_URL="https://www.youtube.com/embed/"
export const PLAY_VIDEO_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id="
export const GET_COMMENT_API="https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId="
export const GET_RELATED_VIDEO_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=" 
export const SEARCH_SUGGESTION_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" 


 

