import React, { useState } from 'react';
import './styles/app.scss';
import Song from './components/Song';
import Player from './components/Player';
import data from './data';
import Songlist from './components/SongList';
import ToggleList from './components/ToggleList';



const App = () => {
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[1]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [displayListSong, setDisplayListSong] = useState(false)

    return (
        <div className={`App ${displayListSong ? "activeList" : ""}`}>

            <ToggleList
                displayListSong={displayListSong}
                setDisplayListSong={setDisplayListSong}
            />
            <Song currentSong={currentSong} />

            <Player
                setSongs={setSongs}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                songs={songs}
            />
            <Songlist
                songs={songs}
                setCurrentSong={setCurrentSong}
                setSongs={setSongs}
                displayListSong={displayListSong}
            />
        </div>
    );
}

export default App;
