import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import signalR, { HubConnectionBuilder } from '@microsoft/signalr';

function App() {

  useEffect(() => {
    const apiBaseUrl = "https://gary-pubsubtest-funcapp.azurewebsites.net"
    const connection = new HubConnectionBuilder()
        .withUrl(apiBaseUrl + '/api')
        .build();
      connection.on('newMessage', (message) => {
  console.log({message});    });
  
      connection.start()
        .catch(console.error);

  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
