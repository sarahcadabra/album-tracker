import React from 'react';
import AlbumCard, {albumType} from "./AlbumCard";

interface AlbumTableProps {
    albums: albumType[];
}

const AlbumOverview: React.FC<AlbumTableProps> = ({albums}) => {
    return (
            <div className={"grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" }>
                {albums.map((album) => (
                    <AlbumCard key={album._id} album={album}/>
                ))}
            </div>
    );
};

export default AlbumOverview;