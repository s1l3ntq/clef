import React from 'react'

export default function MusicSearchResult({tracks, selectTrack}) {
  function handlePlay(){
    selectTrack(tracks)
  }


  return (
    <div className='d-flex m-2 align-items-center' 
         style={{cursor: 'pointer'}}
         onClick={handlePlay}
         >
        <img src={tracks.albumUrl} style={{ height: '100px', width: '100px' }}/>
       <div className='m-29'/>
        <div>{tracks.trackName}
        <div className='text-muted'>{tracks.artist}</div>
      </div>
    </div>
  )
}
