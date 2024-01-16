import React, { useState, useEffect } from 'react';

const TabManager = () => {
  const [tabCount, setTabCount] = useState(1);

  useEffect(() => {
    
    if (tabCount >= 3) {
      
      window.open('https://www.linkedin.com/in/manushi-pandya-6a640a278/', '_self').close();
    }

   
    localStorage.setItem('tabCount', tabCount);
  }, [tabCount]);

  const handleNewTab = () => {
  
    setTabCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    
    const storedTabCount = localStorage.getItem('tabCount');
    if (storedTabCount) {
      setTabCount(Number(storedTabCount));
    }
  }, []);

  return (
    <div>
      <p>Number of tabs opened: {tabCount}</p>
      <button onClick={handleNewTab}>Open New Tab</button>
    </div>
  );
};

export default TabManager;
