import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';





const Player = ({ setSongs, currentSong, setIsPlaying, isPlaying, songs, setCurrentSong }) => {

    const audioRef = useRef(null);



    const playSong = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        }

    }



    const timeUpdadeHandler = (e) => {

        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        const roundCurrent = Math.round(currentTime);
        const roundDuration = Math.round(duration);
        const aniamtionPercentage = Math.round((roundCurrent / roundDuration) * 100)

        if (currentTime === duration) {
            const currentIndex = songs.findIndex((item) => item.id === currentSong.id);

            if (currentIndex === (songs.length - 1)) {
                setCurrentSong(songs[0]);
            } else {
                setCurrentSong(songs[currentIndex + 1])
            }

            playSong();

        }

        setSongInfo({ ...songInfo, currentTime, duration, aniamtionPercentage })

    }

    const timeFormat = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }

    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        aniamtionPercentage: 0
    })

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value })

    }

    const skipSong = (dir) => {
        const currentIndex = songs.findIndex((item) => item.id === currentSong.id);
        if (dir === "next") {
            if (currentIndex === (songs.length - 1)) {
                setCurrentSong(songs[0]);
            } else {
                setCurrentSong(songs[currentIndex + 1])
            }


        }
        if (dir === "back") {
            if (currentIndex === (0)) {
                setCurrentSong(songs[songs.length - 1]);
            } else {
                setCurrentSong(songs[currentIndex - 1])
            }

        }
    }

    //add the style
    const trackAnimathin = {
        transform: `translateX(${songInfo.aniamtionPercentage}%)`
    }

    return (
        <div className='player'>
            <div className='time-control'>
                <p>{timeFormat(songInfo.currentTime)}</p>
                <div className="track">
                    <input onChange={dragHandler} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type='range' />
                    <div style={trackAnimathin} className="aniamte-track">

                    </div>
                </div>

                <p>{timeFormat(songInfo.duration)}</p>
            </div>
            <div className='play-control'>
                <FontAwesomeIcon onClick={() => skipSong("back")} className='skip-back' size='5x' icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSong} className='play' size='5x' icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon onClick={() => skipSong("next")} className='skip-forward' size='5x' icon={faAngleRight} />
            </div>
            <audio onLoadedMetadata={timeUpdadeHandler} onTimeUpdate={timeUpdadeHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    );
}

export default Player;
