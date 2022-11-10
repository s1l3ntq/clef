import React from 'react'
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


useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)

}, [accessToken,])


  return (
    <Container className='d-flex flex-column py-2' style={{ height: '100vh' }}> 
        <Form.Control type='search' placeholder='Search Music/Artists...' value={search}
            onChange={e => setSearch(e.target.value)}
        />
        <<div className='flex-grow-1 my-2' style={{ overflowY: 'auto' }}>
            Music
            
        </div>
     </Container>
  )
}
