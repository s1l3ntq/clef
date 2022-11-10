import React, { useState, useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function Player({accessToken, tracksUri}) {

 const [play, setPlay] = useState(false)

 useEffect(() => setPlay(true), [tracksUri])

  if (!accessToken) return null
  return <SpotifyPlayer token={accessToken} showSaveIcon 
      callback={ state => {
          if (!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={tracksUri ? [tracksUri] :[]}
        />

  
}
