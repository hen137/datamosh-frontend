import { useRef } from 'react'
import VideoStream from './VideoStream.jsx'
import ModeSelection from './ModeSelection.tsx'
import './App.css'

function App() {
  const playerRef = useRef(null);

  // TODO: review options
  const videoJsOptions = {
    muted: true,
    controls: false,
    loop: true,
    disablePictureInPicture: true,
    textTrackSettings: false,
    bigPlayButton: false,
    controlBar: false,
    loadingSpinner: false,
    errorDisplay: false,
    // responsive: false,
    // fluid: true,
    sources: [{
      src: './src/assets/Datamoshing.mp4',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    player.ready(function() {
      var promise = player.play();
    
      if (promise !== undefined) {
        promise.then(function() {
          // Autoplay started!
          console.log("autoplay good");
        }).catch(function(error: any) {
          // Autoplay was prevented.
          console.log("autoplay bad");
        });
      }
    });

    // You can handle player events here, for example:
    // player.on('waiting', () => {
    //   videojs.log('player is waiting');
    // });

    // player.on('dispose', () => {
    //   videojs.log('player will dispose');
    // });
  };

  return (
    <div className='app-container'>
      <VideoStream options={videoJsOptions} onReady={handlePlayerReady}/>
      <ModeSelection/>
    </div>
  )
}

export default App
