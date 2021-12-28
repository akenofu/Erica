import React from "react";
import { useState, useEffect } from "react";

const Card = (props) => {
  

  const { serverID, name, numberOfSongsRequests, mostRequestedSong, testid } = props;
  const [clicked, setClicked] = useState(false);

  const onClick = (event)=>{
    setClicked(!clicked);
  }

  const originalClasses = "tc grow bg-light-green black br3 pa3 ma2 dib bw2 shadow-5";
  const clickedClasses = " tc grow bg-light-purple black br3 pa3 ma2 dib bw2 shadow-5";

  return (
    <div data-testid={testid} className={clicked ?  clickedClasses : originalClasses } onClick={onClick}>
      <img alt="Servers" src={`https://robohash.org/${serverID}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        {clicked ? (
          <>
            <p>{numberOfSongsRequests}</p>
            <p>{mostRequestedSong}</p>
          </>
        ) : (
          <p>{numberOfSongsRequests}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
