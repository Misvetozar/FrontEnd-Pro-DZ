import React from 'react'

function PhotosListItem({photo: {thumbnailUrl}}) {
  return (
    <img src={thumbnailUrl} alt="" className='column-album'/>
  )
}

export default PhotosListItem