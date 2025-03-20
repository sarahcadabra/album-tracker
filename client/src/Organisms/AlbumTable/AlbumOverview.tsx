import React from 'react';
import AlbumCard, {albumType} from "./AlbumCard";

interface AlbumTableProps {
    albums: albumType[];
}

const AlbumOverview: React.FC<AlbumTableProps> = ({albums}) => {
    return (
        <>
            {albums.map((album) => (
                <AlbumCard key={album._id} album={album}/>
            ))}
        </>
    );
};

export default AlbumOverview;