import React, {Component} from 'react';
import './Landing.scss';
import search from '../../images/search.svg';
import group from '../../images/user-friends-solid.svg';
import message from '../../images/comment.png'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: ''
    }
  }
  render() { 
    return ( 
      <section className='landing-section-wrapper'>
        <div className='background-image-div-landing'>
          <div className='paragraph-div-container'>
            <p className='landing-p'><img src={search} alt='magnifying-glass' className='icon'/> Follow your interests.</p>
            <p className='landing-p'><img src={group} alt='group' className='icon'/> Filter only the accounts you wish to see.</p>
            <p className='landing-p'><img src={message} alt='text-bubble' className='icon'/>Join the conversation.</p>
          </div>
        </div>
        <div>
          <form className='form'>
            <input placeHolder='Phone, email, username' value={username}></input>
            <input placeHolder='Password' value={password}></input>
            <button className='btn'>Log In</button>
          </form>
          <h1>Welcome to Twitter!</h1>
        </div>
      </section>
    );
  }
}
export default Landing;