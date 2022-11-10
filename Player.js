import React, { useState, useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function Player({accessToken, trackUri}) {

 const [play, setPlay] = useState(False)

 useEffect(() => setPlay(true), [trackUri])

  if (!accessToken) return null
  return (
    <SpotifyPlayer token={accessToken} showSaveIcon uris={trackUri ? [trackUri] :[]}
     callback={ state => {
        if (!state.isPlaying) setPlay(false)
     }}
     play={true}
    />

  )
}
