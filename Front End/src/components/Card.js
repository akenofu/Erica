import React from "react";
import { useState, useEffect } from "react";

const Card = (props) => {
  

  const { serverID, serverName, numberOfSongsRequests, mostRequestedSong, testid } = props;
  const [clicked, setClicked] = useState(false);

  const onClick = (event)=>{
    setClicked(!clicked);
  }

  const originalClasses = "tc grow bg-light-green black br3 pa3 ma2 dib bw2 shadow-5";
  const clickedClasses = " tc grow bg-light-purple black br3 pa3 ma2 dib bw2 shadow-5";

  return (
    <div data-testid={testid} className={clicked ?  clickedClasses : originalClasses } onClick={onClick}>
      <img alt="Servers" src={`https://robohash.org/${serverID}?size=200x200`} />
      <div style={{maxWidth: "250px"}}>
        <h2 >{serverName}</h2>
        {clicked ? (
          <>
            <p>Song Requests: {numberOfSongsRequests}</p>
            <p> Most Requested: {mostRequestedSong.songName}</p>
          </>
        ) : (
          <p>Song Requests: {numberOfSongsRequests}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
