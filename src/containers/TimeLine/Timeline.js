import React from 'react';
import Tweet from '../Tweet/Tweet';

const Timeline = () => {
  const tweets = ['Chirp', 'Chirp', 'Chirp'].map(tweet => {
    return (<Tweet
      photo={tweet.photo}
      username={tweet.username}
      text={tweet.text}
      handle={tweet.handle}
      id={tweet.id}
      key={tweet.id}
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