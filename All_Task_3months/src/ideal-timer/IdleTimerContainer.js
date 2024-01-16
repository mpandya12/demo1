import React, { useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';

function IdleTimerContainer() {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const [password, setPassword] = useState('');
  const [username,setusername]=useState('');

  const onIdle = () => {
    console.log('User is idle');
    setisLoggedIn(false);
    setShowConfirmation(true);
  };

  const handleLogoutConfirmed = () => {
   
    console.log('Logging out...');
    setShowConfirmation(false);
  };

  const handleLogoutCancelled = () => {
   
    setisLoggedIn(true);
    setShowConfirmation(false);
  };

  const handleLogin = () => {
   
    setisLoggedIn(true);
   setPassword(" ")
  };

  useIdleTimer({
    timeout: 5 * 1000,
    onIdle: onIdle,
  });

  return (
    <div>
      <h1>Idle Timer</h1>

      {isLoggedIn ? (
        <div>
          <h2>Hello {username}</h2>
          <h4>Active user</h4>
        </div>
      ) : (
        <div>
          <h2>Are you sure you want to logout?</h2>
          <p>Logout in progress...</p>
          <button onClick={handleLogoutConfirmed}>Yes, Logout</button>
          <button onClick={handleLogoutCancelled}>Cancel</button>
        </div>
      )}


      {!isLoggedIn && !showConfirmation && (
        <div>
          <h2>Enter password for Loging Agin</h2>
          <label>
           name
            <input type="password" value={username} onChange={(e) => setusername(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>

          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default IdleTimerContainer;
