import React from 'react';
import { Link } from 'react-router-dom';
import "./style/homepage.css"

function Home() {
  return (
    <>
     <h1>All Tasks</h1>
      <div className='containers'>
       
        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/form' className='links'>
              My Form
            </Link>
          </button>
        </div>
        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/todo' className='links'>
              ToDo
            </Link>
          </button>
        </div>
        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/calculator' className='links'>
              Calculator
            </Link>
          </button>
        </div>
        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/img-cropper' className='links'>
              Image Cropper
            </Link>
          </button>
        </div>
        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/tags' className='links'>
              Input Tags
            </Link>
          </button>
        </div>
        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/words-wrapper' className='links'>
              Words Wrapper
            </Link>
          </button>
        </div>
        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/curd' className='links'>
              Employee CRUD
            </Link>
          </button>
        </div>
        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/editpost' className='links'>
              Edit Post
            </Link>
          </button>
        </div>
        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/idle-timer' className='links'>
              Timer Idle
            </Link>
          </button>
        </div>
        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/profile-update' className='links'>
              Profile Update
            </Link>
          </button>
        </div>
        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/time' className='links'>
              Time zone
            </Link>
          </button>
        </div>

        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/phone' className='links'>
              Phone Number
            </Link>
          </button>
        </div>
        {/* //settext((prevText) => prevText.substring(0, selectionStart) + emoji + prevText.substring(selectionEnd)); */}

        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/emoji' className='links'>
            Emoji-Picke
            </Link>
          </button>
        </div>

        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/reaction' className='links'>
            Rections
            </Link>
          </button>
        </div>
        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/chatApp' className='links'>
            ChatApp
            </Link>
          </button>
        </div>
        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/Address' className='links'>
           MultiipalAddress
            </Link>
          </button>
        </div>
        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/UserGuide' className='links'>
         UserGuide_example
            </Link>
          </button>
        </div>
        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/stepFrom' className='links'>
         MultistepFrom
            </Link>
          </button>
        </div>
        <div className='class-1s'>
          <button className='button-links'>
            <Link to='/contextmenu' className='links'>
          ContextText
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
