import React from 'react';
import { BsFillLightbulbFill } from 'react-icons/bs';
import { FaMusic, FaNewspaper, FaTrophy } from 'react-icons/fa';
import { FaShirt } from 'react-icons/fa6';
import { HiOutlineTrendingUp } from 'react-icons/hi';
import { IoHome, IoPlayCircleOutline } from 'react-icons/io5';
import { LiaVideoSolid } from 'react-icons/lia';
import { MdWifiTethering, MdOutlineHistory, MdOutlinePlaylistPlay, MdOutlineWatchLater, MdOutlineThumbUp } from 'react-icons/md';
import { PiFilmSlateBold } from 'react-icons/pi';
import { SiYoutubegaming, SiYoutubeshorts } from 'react-icons/si';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const sidebarStatus = useSelector((store) => store.app.sidebar);

  if (!sidebarStatus) return null;

  return (
    <div className="w-64 shadow-lg py-2 bg-black text-white fixed top-20 left-0 h-[calc(100vh-5rem)] overflow-y-auto z-10">
      {/* Top Section */}
      <div className="p-2 pl-4">
        <ul className="text-lg">
          <li className="hover:bg-gray-500 rounded flex items-center p-2" onClick={() => window.location.href = '/'}>
            <IoHome />
            <span className="ml-2">Home</span>
          </li>
          <li className="hover:bg-gray-500 rounded flex items-center p-2">
            <SiYoutubeshorts />
            <span className="ml-2">Shorts</span>
          </li>
          <li className="hover:bg-gray-500 rounded flex items-center p-2">
            <IoPlayCircleOutline />
            <span className="ml-2">Subscriptions</span>
          </li>
          <li className="hover:bg-gray-500 rounded flex items-center p-2">
            <LiaVideoSolid />
            <span className="ml-2">Library</span>
          </li>
          <li className="hover:bg-gray-500 rounded flex items-center p-2">
            <MdWifiTethering />
            <span className="ml-2">Live</span>
          </li>
          <li className="hover:bg-gray-500 rounded flex items-center p-2">
            <HiOutlineTrendingUp />
            <span className="ml-2">Trending</span>
          </li>
        </ul>
      </div>

      <hr className="border-2 border-white" />

      {/* Middle Section */}
      <div className="p-2">
        <h1 className="font-bold ml-1">You</h1>
        <ul className="text-lg">
          <li className="hover:bg-gray-500 rounded flex items-center p-2">
            <MdOutlineHistory />
            <span className="ml-2">History</span>
          </li>
          <li className="hover:bg-gray-500 rounded flex items-center p-2">
            <MdOutlinePlaylistPlay />
            <span className="ml-2">Playlists</span>
          </li>
          <li className="hover:bg-gray-500 rounded flex items-center p-2">
            <MdOutlineWatchLater />
            <span className="ml-2">Watch Later</span>
          </li>
          <li className="hover:bg-gray-500 rounded flex items-center p-2">
            <MdOutlineThumbUp />
            <span className="ml-2">Liked Videos</span>
          </li>
        </ul>
      </div>

      <hr className="border-2 border-white" />

      {/* Bottom Section */}
      <div className="p-2">
        <h1 className="font-bold ml-1">Explore</h1>
        <ul className="text-lg">
          <li className="hover:bg-gray-500 rounded flex items-center p-2">
            <FaMusic />
            <span className='ml-2'>Music</span>
          </li>
          <li className="hover:bg-gray-500 rounded flex items-center p-2">
            <FaTrophy />
            <span className='ml-2'>Sports</span>
          </li>
          <li className="hover:bg-gray-500 rounded flex items-center p-2">
            <FaNewspaper />
            <span className='ml-2'>Politics</span>
          </li>
          <li className="hover:bg-gray-500 rounded flex items-center p-2">
            <PiFilmSlateBold />
            <span className='ml-2'>Cinema</span>
          </li>
          <li className="hover:bg-gray-500 rounded flex items-center p-2">
            <SiYoutubegaming />
            <span className='ml-2'>Gaming</span>
          </li>
          <li className="hover:bg-gray-500 rounded flex items-center p-2">
            <BsFillLightbulbFill />
            <span className='ml-2'>Courses</span>
          </li>
          <li className="hover:bg-gray-500 rounded flex items-center p-2">
            <FaShirt />
            <span className='ml-2'>Fashion</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar; 
