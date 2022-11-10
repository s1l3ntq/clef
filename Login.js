import React from 'react'
import { Container } from 'react-bootstrap'

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=858db09a4ff949598ab477282f9a8c27&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private%20user-read-currently-playing%20user-library-modify%20user-read-email%20user-library-read%20user-library-modify%20user-read-private'

export default function Login() {
  return (
    <Container 
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh"}}
    >
        

        <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login to your spotify
        </a>
    </Container>
  )
}
