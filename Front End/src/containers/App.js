import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CustomParticles from "../components/CustomParticles/CustomParticles";
import { useState, useEffect } from 'react';
import './App.css';

const App = (props) => {
    const [Servers, setServers] = useState([]);
    const [searchField, setSearchField] = useState('');

    

    useEffect(() => {
      fetch('http://localhost:3000/api/v1/servers')
      .then(response=> response.json())
      .then(data => {
        const formattedData = data.map(server => {
            return {
              serverID: server.serverID,
              serverName: server.serverName,
              numberOfSongsRequests: server.numberOfSongsRequests,
              mostRequestedSong: server.mostRequestedSong
            }
        });
        setServers(formattedData);
      }).catch(er => console.log)
      
      ;
     } , [])


     const onSearchChange = (event) => {
      setSearchField(event.target.value);
    }

    const filteredServers = Servers.filter(Server =>{
      return Server.serverName.toLowerCase().includes(searchField.toLowerCase());
    })

    return !Servers.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>erica</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList Servers={filteredServers} />
          </Scroll>
          <CustomParticles />
        </div>
      );

}

export default App;