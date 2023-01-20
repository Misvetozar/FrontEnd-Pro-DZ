import React from 'react'

function PhotosListItem({photo: {thumbnailUrl}}) {
  return (
    <img src={thumbnailUrl} className='column-album'/>
  )
}

export default PhotosListItem