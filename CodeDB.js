import React from 'react'
import MusicSearchResult from './MusicSearchResult'
import {useState, useEffect} from 'react'
import useAuthHook from './useAuthHook'
import { Container, Form }  from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'


const spotifyApi = new SpotifyWebApi({
    clientId: '858db09a4ff949598ab477282f9a8c27'
})



export default function CodeDB({code}) {
  const accessToken = useAuthHook(code)
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  console.log(results)


  useEffect(()=> {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
}, [accessToken])


useEffect(() => {
    if (!search) return setResults([])
    if (!accessToken) return

    let cancel = false


    spotifyApi.searchTracks(search).then(res => {
        if (cancel) return
       setResults(res.body.tracks.items.map(tracks =>{
          const albumImage = tracks.album.images.reduce((smallest, image) =>{
            if (image.height < smallest.height) return image
            return smallest
          }, tracks.album.images[0])


          return {
            artist: tracks.artists[0].name,
            trackName: tracks.name,
            albumUrl: albumImage.url
        }
       }))
    })

    return () => cancel = true
},[search, accessToken])


  return (
    <Container className='d-flex flex-column py-2' style={{ height: '100vh' }}> 
        <Form.Control type='search' placeholder='Search Music/Artists...' value={search}
            onChange={e => setSearch(e.target.value)}
        />
        <div className='flex-grow-1 my-2' style={{ overflowY: "auto" }}>
            {results.map(tracks => (
                 <MusicSearchResult tracks={tracks} key={tracks.uri} />
            ))}
            
        </div>
     </Container>
  )
}
