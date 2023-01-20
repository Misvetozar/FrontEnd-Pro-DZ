import React from 'react'
import AlbumsListItem from './AlbumsListItem'


export default function AlbumsList({ list, onNavigate }) {
  return (
    <div className='column-album'>
        <ul>
            {list.map((item) => (
                <AlbumsListItem key={item.id} album={item} onNavigate={onNavigate} />
            ))}
        </ul>
    </div>
  );
}
