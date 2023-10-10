import { useState } from 'react'
import React, { Component } from 'react';

import './App.css'
import LeftVertical from './components/LeftVertical';
import RightVertical from './components/RightVertical';
import TopHorizontal from './components/TopHorizontal';
import Middle from './components/Middle';
import NotesPopup from './components/NotesPopup.jsx';
import StandUpReminder from './components/StandUpReminder';
import MusicPopup from './components/MusicPopup.jsx';
import smartTable from './assets/smartTable.jpeg';
import googleCal from './assets/googleCal.png';
import outlookCal from './assets/outlookCal.png';
import appleCal from './assets/appleCal.png';
import dailyCal from './assets/dailyCal.png';


import phone from './assets/phone.jpeg';
import watch from './assets/watch.jpeg';
import airpods from './assets/airpods.jpeg';
import stand from './assets/stand.png';
import iMessagePic from './assets/imessage.png';
import notes from './assets/notes.png';
import clock from './assets/clock.gif';
import music from './assets/music.png';
import emailPic from './assets/email.png';
import instagramPic from './assets/instagram.png';
import slackPic from './assets/slack.png';
import news from './assets/news.png';

let defaultNews = [
  "News Update\nBreaking News: Scientists Discover New Species in the Amazon Rainforest",
  "Economy Report\nStock Market Soars to Record Highs Amidst Economic Recovery",
  "Technology News\nApple Unveils Latest iPhone with Revolutionary Features",
  "Sports Update\nTeam USA Wins Gold in the Tokyo Olympics",
  "Health Report\nNew Study Reveals Surprising Benefits of Meditation",
];

let defaultUser = "Henry";

let defaultIcon = news; 

let defaultHeight = 50;

let defaultCal = outlookCal;

let defaultNotes = "Apple Notes";

let defaultStand = "60";

function App() {

  let [device, setDevice] = useState(null);

  let handleUserClick = (userValue) => {
    setDevice(userValue);
  };


  

  const Email = [
    "        Email from Shubhra\nHello, Please send the required documents for this deliverable.",
    "Email from Samuel\nHey! It was nice to see you today!",
    "Email from Tom\nHello, I am pleased to announce that you are selected for the next round of interviews."
  ];
  
  const iMessage = [
    "iMessage from Cody\nHey, I am on my way.",
    "iMessage from Smith\nWhen can we meet? I want to share something!",
    "iMessage from Brayden\nI am upstairs, let's hang out after you are done with your meeting."
  ];
  
  const Instagram = [
    "Instagram Message from Cody\nCody sent a Reel from UofCincy.",
    "Instagram from Cory\nWhen can we meet? I want to share something!",
    "Instagram from Brayden\nI am upstairs, let's hang out after you are done with your meeting."
  ];
  
  const Slack = [
    "Slack from Jordan\nHey, I am on my way.",
    "Slack from Cory\nWhen can we meet? I want to share something!",
    "Slack from Robert\nI am upstairs, let's hang out after you are done with your meeting."
  ];
  
  const user1 = {
    id: 1,
    name: "Henry",
    notificationPreference: Email,
    notificationPreferenceIcon: emailPic,
    heightPreference: 80,
    calendarPreference: googleCal,
    notesPreference: "Apple Notes",
    standupPreference: "60",
  };
  
  const user2 = {
    id: 2,
    name: "Nancy",
    notificationPreference: iMessage,
    notificationPreferenceIcon: iMessagePic,
    heightPreference: 20,
    calendarPreference: outlookCal,
    notesPreference: "OneNote",
    standupPreference: "30",
  };
  
  const user3 = {
    id: 3,
    name: "Donald",
    notificationPreference: Instagram,
    notificationPreferenceIcon: instagramPic,
    heightPreference: 50,
    calendarPreference: appleCal,
    notesPreference: "Notion",
    standupPreference: "90",
  };
  
  const user4 = {
    id: 4,
    name: "Tim",
    notificationPreference: Slack,
    notificationPreferenceIcon: slackPic,
    heightPreference: 70,
    calendarPreference: dailyCal,
    notesPreference: "GoodNotes",
    standupPreference: "40",
  };
  
  const users = [user1, user2, user3, user4];


  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserButtonClick = (user) => {
    setSelectedUser(user);
  };

  


  
  const [isTimerPopupOpen, setIsTimerPopupOpen] = useState(false);

  const handleOpenTimerPopup = () => {
    setIsTimerPopupOpen(true);
  };

  const handleCloseTimerPopup = () => {
    setIsTimerPopupOpen(false);
  };


  const [isNotesPopupOpen, setIsNotesPopupOpen] = useState(false);

  const handleOpenNotesPopup = () => {
    setIsNotesPopupOpen(true);
  };

  const handleCloseNotesPopup = () => {
    setIsNotesPopupOpen(false);
  };


  let changeGlobalVariable = (newValueName, newValueNot,newValueIcon, newValueHeight, newValueCal, newValueNotes, newValueStand) => {
    defaultNews = newValueNot;
    defaultIcon = newValueIcon;
    defaultHeight = newValueHeight;
    defaultCal = newValueCal;
    defaultNotes = newValueNotes;
    defaultStand = newValueStand;
    defaultUser = newValueName;
    setValue(defaultNews);
    setValue(defaultIcon);
    setValue(defaultHeight);
    setValue(defaultCal);
    setValue(defaultNotes);
    setValue(defaultStand);
    setValue(defaultUser);
  };



  const [isReminderPopupOpen, setReminderPopupOpen] = useState(false);

  const handleOpenReminderPopup = () => {
    setReminderPopupOpen(true);
  };

  const handleCloseReminderPopup = () => {
    setReminderPopupOpen(false);
  };




  const [isMusicPopupOpen, setIsMusicPopupOpen] = useState(false);

  const handleOpenMusicPopup = () => {
    setIsMusicPopupOpen(true);
  };

  const handleCloseMusicPopup = () => {
    setIsMusicPopupOpen(false);
  };


const [isGrayBackground, setIsGrayBackground] = useState(false);

  const handleOffButtonClick = () => {
    setIsGrayBackground((prev) => !prev); // Toggle the state
  };



  return (

  
    
    <div className="App">

     
<div className={`parent ${isGrayBackground ? 'gray-background' : ''}`}>
      
        <div class="div1">
            <LeftVertical> </LeftVertical>
        </div>

        <div class="div2">
            <div class="div2-message"><TopHorizontal notifications={defaultNews} image={defaultIcon}> </TopHorizontal>
            </div>
        </div>
               
        <div class="div3">
        <div className='welcome-message'>Welcome {defaultUser}!</div>
        
        <div className='info'> Wed Oct 10th, 2023   60 °F ☀️</div>
            <div class="vertical-section">

          <RightVertical sliderUser = {defaultHeight}> </RightVertical>
            </div>
        </div>
       
    <div class="div4">
    <div class="circle-pair">
    <div className="circle">
        <div>
          {/* Wrap the image in a clickable button */}
          <button onClick={handleOpenTimerPopup} className="image-button">
            <img src={clock} alt="Button 1" />
          </button>
          {isTimerPopupOpen && (
            <div className="overlay">
              <Middle onClose={handleCloseTimerPopup} />
            </div>
          )}
        </div>
      </div>
  
      <div className="circle">
      <div>
        <button onClick={handleOpenReminderPopup} className="image-button">
          {/* You can use your stand-up icon here */}
          <img src={stand} alt="Stand Up Icon" />
        </button>
        {isReminderPopupOpen && (
              <div className="overlay">
                <StandUpReminder onClose={handleCloseReminderPopup} person={defaultUser} ST={defaultStand}/>
              </div>
            )}
      </div>
    </div>
    </div>

    <div class="circle-pair">
        <div class="circle">
        <div>
          {/* Wrap the image in a clickable button */}
          <button onClick={handleOpenMusicPopup} className="image-button">
          <img src={music} alt="Music Icon" />
        </button>
        {isMusicPopupOpen && (
          <div className="overlay">
            <MusicPopup onClose={handleCloseMusicPopup} player={defaultUser}/>
          </div>
        )}
        </div>
        </div>

        <div className="circle">
      <div>
        <button onClick={handleOpenNotesPopup} className="image-button">
          <img src={notes} alt="Notes" />
        </button>
        {isNotesPopupOpen && (
          <div className="overlay">
            <NotesPopup onClose={handleCloseNotesPopup} name={defaultNotes}/>
          </div>
        )}
      </div>
    </div>
    </div>
</div>


<div class="div5">
    <div class="day-schedule">
        <img className = "day-schedule-cal" src={defaultCal} />
    </div>
</div>

<div className="div6">
<button className="off-button" onClick={handleOffButtonClick}>
          Power
        </button>
        <button className="user-profile-button">User Profile
  <div className="nested-buttons">
    {users.map((user) => (
      <button
        key={user.id}
        className="small-button"
        onClick={() => {
          handleUserButtonClick(user);

          if (device) {
            if (device == selectedUser.name){// Check if device is not empty
            changeGlobalVariable(
              selectedUser.name,
              selectedUser.notificationPreference,
              selectedUser.notificationPreferenceIcon,
              selectedUser.heightPreference,
              selectedUser.calendarPreference,
              selectedUser.notesPreference,
              selectedUser.standupPreference
            );
          }
        }
        }}
      >
        {user.name}
      </button>
    ))}
  </div>
</button>
      
    </div>
    </div>
  
   
    <div className='device-selection'>
      <h2>User Device Selection</h2>
      <div className='devices'>
        <button onClick={() => handleUserClick('Henry')}>Henry</button>
        <button onClick={() => handleUserClick('Nancy')}>Nancy</button>
        <button onClick={() => handleUserClick('Donald')}>Donald</button>
        <button onClick={() => handleUserClick('Tim')}>Tim</button>
      </div>
      {device && <p>{device}'s Device Authenticated. Data Synced complete.</p>}
     
    </div>
  
    </div>




  );
}

export default App;



