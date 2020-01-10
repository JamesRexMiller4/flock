import React, {Component} from 'react';

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render({text, profile, username, handle, id, timestamp}) { 
    return ( 
      <section data-id={id}>
        <img src={profile} alt='profile' />
        <h2>{username}</h2>
        <h2>{handle}</h2>
        <h2>{timestamp}</h2>
        <p>{text}</p>
        <div className='tweet-actions-container-div'>
          <button type='button'>Comment</button>
          <button type='button'>Retweet</button>
          <button type='button'>Like</button>
          <button type='button'>Share</button>
        </div>
      </section>
    );
  }
}
 
export default Tweet;