import React from 'react';
import Buttons from './Buttons';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className="flex flex-col mt-10">
      <div className="scroll-smooth">
        <Buttons/>
      </div>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
