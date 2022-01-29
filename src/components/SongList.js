
import React from 'react';
import SongListItem from './SongLIstItem';

const Songlist = ({ songs, setCurrentSong, setSongs, displayListSong }) => {
    return (
        <div className={`song-list ${displayListSong ? "" : "displayList"}`} >
            <h2>Song List</h2>
            <div className='song-list-items '>
                {songs.map(song => (
                    <SongListItem key={song.id} song={song} setCurrentSong={setCurrentSong} songs={songs} setSongs={setSongs} />
                ))}
            </div>

        </div>
    );
}

export default Songlist;
