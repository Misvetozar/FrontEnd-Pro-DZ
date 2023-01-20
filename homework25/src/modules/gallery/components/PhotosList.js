import React from 'react'
import PhotosListItem from './PhotosListItem'




function PhotosList({ list }) {
  return (
    <div className='column'>
      {list.map(item => (<PhotosListItem key={item.id} photo={item} />))}
    </div>
  )
}

export default PhotosList