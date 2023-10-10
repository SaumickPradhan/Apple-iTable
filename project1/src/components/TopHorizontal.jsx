import React, { useState, useEffect } from 'react';
import imessage from '../assets/imessage.png';
import emailPic from '../assets/email.png';
import instagramPic from '../assets/instagram.png';
import slackPic from '../assets/slack.png';
import news from '../assets/news.png';

function TopHorizontal({notifications,image}){
    const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);

    // Automatically cycle through notifications
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotificationIndex((prevIndex) => (prevIndex + 1) % notifications.length);
    }, 3000); // Change notification every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [notifications]);
  return (
    <div className="top-horizontal-component">
  {notifications.length > 0 && (
    <div className="notification">
      {notifications[currentNotificationIndex].split('\n').map((line, index) => (
        <div key={index} className="notification-line">
          {index === 0 && (
            <img src={image} className="notification-icon" />
          )}
          <p className="notification-text">
            {line}
          </p>
        </div>
      ))}
    </div>
  )}
</div>
  );
}

export default TopHorizontal;