import React from 'react';

interface AlbumRowProps {
    album: albumType;
}

export interface albumType {
    company : string,
    group: string,
    profile_id: number,
    songs: number,
    title: string,
    version: string,
    year: number,
    imageUrl: string,
    _id: string
}

const AlbumCard: React.FC<AlbumRowProps> = ({album}) => {

    //<div className="m-6 grow-1 w-full bg-white border border-indigo-200 rounded-lg shadow-lg dark:bg-indigo-900 dark:border-indigo-800">
    //
    return (
        <div className="m-6 bg-white border border-indigo-200 rounded-lg shadow-lg dark:bg-indigo-900 dark:border-indigo-800">
        <a href="#">
                    <img className="rounded-t-lg" src={album.imageUrl} alt=""/>
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{album.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{album.group}</p>
                </div>
                </a>
            </div>
    );
};

export default AlbumCard;