import React from 'react';
import Card from './Card';

const CardList = ({ Servers }) => {
  return (
    <div data-testid="CardList" >
      {
        Servers.map((server,i) => {
          return (
            <Card
              testid = {i}
              key = {server.serverID}
              name = {server.serverName}
              serverID = {server.serverID}
              numberOfSongsRequests = {server.numberOfSongsRequests}
              mostRequestedSong = {server.mostRequestedSong}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;