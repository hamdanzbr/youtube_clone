// src/components/CommentSection.jsx

import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const CommentSection = ({ comments }) => {
    return (
        <div className="mt-6">
            <h3 className="text-lg font-bold text-white">Comments({comments.length})</h3>

            {/* Comment Input */}
            <div className="flex items-start mt-4">
                <img
                    src="https://via.placeholder.com/50"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                />
                <input
                    type="text"
                    placeholder="Add a public comment..."
                    className="ml-4 w-full p-2 border border-gray-300 rounded-lg"
                />
            </div>

            {/* List of Comments */}
            {comments.map((comment) => (
                <div key={comment.id} className="mt-6 space-y-4">
                    <div className="flex items-start">
                        <img
                            src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                        <div className="ml-4">
                            <p className="font-bold text-white">{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
                            <p className="text-sm text-white">{comment?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
                        </div>
                    </div>
                    
                    {/* Like/Dislike Buttons */}
                    <div className="flex items-center space-x-4 mt-2 ml-16">
                        <button
                            className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 focus:outline-none"
                            aria-label="Like"
                        >
                            <AiOutlineLike className="w-5 h-5" />
                            <span className="text-sm text-white">{comment?.snippet?.topLevelComment?.snippet?.likeCount}</span>
                        </button>
                        <button
                            className="flex items-center space-x-1 text-gray-600 hover:text-red-500 focus:outline-none"
                            aria-label="Dislike"
                        >
                            <AiOutlineDislike className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentSection;
