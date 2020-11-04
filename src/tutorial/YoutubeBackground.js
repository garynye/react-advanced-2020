// import "./style.css";
import React, { useState } from "react";
import YouTube from "react-youtube";
import "../nesting.css"

// https://stackoverflow.com/questions/46635316/youtube-embedded-video-auto-loop-without-refresh-screen

const YoutubeBackground = (props) => {
  // const [videoId, setVideoId] = useState(videoIdA);
  const videoId = props.videoID;
  const [player, setPlayer] = useState(null);

  const onReady = (Event) => {
    setPlayer(Event.target);
    Event.target.mute();
    Event.target.playVideo();
  };

  const rewind = (Event) => {
    if (Event.data === 1) {
      // console.log('triggered rewind')
      var remains = player.getDuration() - player.getCurrentTime();
      if (player.rewindTO) clearTimeout(player.rewindTO);
      player.rewindTO = setTimeout(function () {
        player.seekTo(0);
      }, (remains - 0.1) * 1000);
    } else {
      // console.log('triggered rewined else')
      // onPlayVideo();
    }
  };

  const opts = {
    height: "100%",
    width: "100%",

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      controls: 0,
      disablekb: 1,
      autoplay: 1,
      fs: 0,
      playsinline: 1,
      iv_load_policy: 3,
      showinfo: 0,
      rel: 0,
      modestbranding: 0,
      wmode: "transparent",
      autohide: 0,
      origin: window.location.origin,
    },
  };

  //https://github.com/tjallingt/react-youtube
  return (
    <div>
      <div className="videoContainer">
        <YouTube
          id="ubid"
          videoId={videoId}
          onReady={onReady}
          opts={opts}
          onStateChange={rewind}
        />
      </div>
    </div>
  );
};

export default YoutubeBackground;
