import api from "../../../api";

import { useState, useEffect } from 'react';

export default function usePhotos(albumId){
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        if (!albumId) return;
        api.get('photos?albumId=' + albumId).then(({ data }) =>
        setPhotos(data)
        );
    }, [albumId]);

    return photos;
}