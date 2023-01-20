import React from 'react'
import AlbumsList from './AlbumsList';
import PhotosList from './PhotosList';
import { useState, useEffect } from 'react';

import useAlbums from '../hooks/useAlbums';
import usePhotos from '../hooks/usePhotos';



function Gallery() {

    const [albumId, setAlbumId] =  useState(null);

    const albums = useAlbums();
    const photos = usePhotos(albumId);

    useEffect(() => {
        if (!albums.length) return;

        setAlbumId(albums[0].id);
    }, [albums])

  return (
    <div className='row'>
        {albumId}
        <AlbumsList list={albums} onNavigate={setAlbumId}/>
        <PhotosList list={photos}/>

    </div>
  )
}

export default Gallery;