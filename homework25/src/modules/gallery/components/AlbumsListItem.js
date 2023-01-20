import React from 'react';

function AlbumsListItem( {album: { id, title}, onNavigate }) {
  return <li onClick={() => onNavigate(id)}>{title}</li>;

}

export default AlbumsListItem;