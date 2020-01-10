import React from 'react';
import Tweet from '../Tweet/Tweet';

const Timeline = () => {
  const obj = {text:'Chirp', handle:'jarvisBlargus', username: 'Jarvis Blargus', id:4, timestamp:'400', photo:''}
  const tweets = [obj, obj, obj].map((tweet, index) => {
    return (<Tweet
      photo={tweet.photo}
      username={tweet.username}
      text={tweet.text}
      handle={tweet.handle}
      id={tweet.id}
      key={index}
      timestamp={tweet.timestamp}
    />)
  })
  return ( 
    <section>
      {tweets}
    </section>
  );
} 
export default Timeline;