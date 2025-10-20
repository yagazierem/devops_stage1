import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>🚀 Deployment Successful!</h1>
          <p className="subtitle">HNG DevOps Stage 1</p>
          <div className="info-card">
            <p>✅ React Application Deployed</p>
            <p>✅ Automated with Bash Script</p>
            <p>✅ Dockerized & Running on AWS</p>
            <p>✅ Nginx Reverse Proxy Configured</p>
          </div>
          <div className="time-display">
            <p>Current Time: {time}</p>
          </div>
         
        </div>
      </header>
    </div>
  );
}

export default App;