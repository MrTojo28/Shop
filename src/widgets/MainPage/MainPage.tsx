import React from 'react';

import './MainPage.css';

interface Props {
 
}

export function MainPage({}: Props) {
  const video = require('../../videos/video.mp4')
  return (
    <div className="main-page"> 
      <video width="1366" height="768" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

