import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { setShowSidebar } from "../utils/appSlice";
import { YOUTUBE_LOGO, NOTIFICATION_IMG, USER_IMG } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import useSearch from "../hooks/useSearch"; // Custom hook

const Header = () => {
    const {searchText,setSearchText, suggestedResults,showSuggestion,setShowSuggestion,selectedQuery,setSelectedQuery} = useSearch();
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleHamburger = () => {
        dispatch(setShowSidebar());
    };

    return (
        <div className="p-1 flex justify-between shadow-md fixed top-0 left-0 w-full z-20 bg-black">
            <div className="flex gap-4 items-center">
                <div className="relative group">
                    <div className="flex items-center justify-center h-20 w-12 rounded-full bg-transparent group-hover:bg-gray-200 transition-colors duration-300">
                        <GiHamburgerMenu className="text-3xl text-white" onClick={handleHamburger} />
                    </div>
                </div>

                <div className="flex items-center">
                    <a href="/">
                        <img className="h-20 cursor-pointer" src={YOUTUBE_LOGO} alt="youtube logo" />
                    </a>
                </div>
            </div>

            <div className="flex items-center w-full max-w-md relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="text-white bg-black w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-gray-600"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onFocus={() => setShowSuggestion(true)}
                    onBlur={() => setShowSuggestion(false)}
                />

                <button className="px-4 py-2 bg-gray-900 border border-gray-300 rounded-r-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <svg
                        className="w-5 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.9 14.32a8 8 0 111.42-1.42l4.62 4.62a1 1 0 01-1.42 1.42l-4.62-4.62zM8 14a6 6 0 100-12 6 6 0 000 12z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                {showSuggestion && (
                    <ul className="absolute top-full left-0 w-full bg-white text-black rounded-lg shadow-lg mt-1 z-10 overflow-y-auto">
                        {suggestedResults.map((suggestion) => (
                            <li key={suggestion} className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex gap-3" 
                                onMouseDown={() => {
                                    setSelectedQuery(suggestion);
                                    setSearchText(suggestion);
                                    navigate('/search');
                                }}>
                                <svg
                                    className="w-3 h-6 text-black"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.9 14.32a8 8 0 111.42-1.42l4.62 4.62a1 1 0 01-1.42 1.42l-4.62-4.62zM8 14a6 6 0 100-12 6 6 0 000 12z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="w-10 flex mt-5 mr-16 gap-4">
                <img className="h-8 cursor-pointer" src={NOTIFICATION_IMG} alt="notif-img" />
                <img className="h-8 cursor-pointer" src={USER_IMG} alt="user" />
            </div>
        </div>
    );
};

export default Header;
