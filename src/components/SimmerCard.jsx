import React from 'react';

const ShimmerCard = () => {
    
    return (

        <div className="w-full max-w-xs rounded overflow-hidden shadow-lg bg-gray-200 cursor-pointer animate-pulse">
            <div className="relative bg-gray-300 h-48 w-full"></div>

            <div className="flex p-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>

                <div className="ml-3 flex flex-col space-y-2">
                    <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
                    <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                    <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
                </div>
            </div>
        </div>
    );
    
};

export default ShimmerCard;
