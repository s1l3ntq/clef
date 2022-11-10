import React from 'react'
import useAuthHook from './useAuthHook'


export default function CodeDB({code}) {
  const accessToken = useAuthHook(code)
  return (
    <div> {code} </div>
  )
}
