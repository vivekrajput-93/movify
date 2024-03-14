import React from 'react'

interface MovieInfo {
    item : string,
    title : string,
}

const MovieInfo:React.FC<MovieInfo> = ({item, title}) => {
  return (
    <div className='bg-blue-700' >
        <h1 className='text-2xl' >This is movie section</h1>
    </div>
  )
}

export default MovieInfo;