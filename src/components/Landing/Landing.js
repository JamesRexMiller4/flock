import React, {Component} from 'react';
import './Landing.scss';
import search from '../../images/search.svg';
import group from '../../images/user-friends-solid.svg';
import message from '../../images/comment.png';
import twitter from '../../images/goldtwitter.png';

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
        <div className='right-landing-div'>
          <form className='form'>
            <input placeHolder='Phone, email, or username' value={this.state.username} 
            name='username' className='input-form' autoComplete='off'></input>
            <input placeHolder='Password' value={this.state.password} 
            name='password' className='input-form' autoComplete='off'></input>
            <button type='button' className='login btn'>Log in</button>
          </form>
          <div className='welcome-message-div'>
            <img src={twitter} alt='twitter-icon' className='twitter-icon'/>
            <h2>See what's happening in <br></br> the world right now</h2>
            <h3 className="h3-welcome">Join Twitter today.</h3>
            <button type='button' className='sign-up btn'>Sign up</button>
          </div>
        </div>
      </section>
    );
  }
}
export default Landing;