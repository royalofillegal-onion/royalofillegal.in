
import React, { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Volume1, VolumeX } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { usePlayer } from "@/context/PlayerContext";
import { cn } from "@/lib/utils";

const Player = () => {
  const {
    currentSong,
    isPlaying,
    volume,
    currentTime,
    duration,
    togglePlayPause,
    previousSong,
    nextSong,
    setVolume,
    seekTo,
  } = usePlayer();
  
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  
  // Format time in MM:SS format
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  
  // Volume icon based on volume level
  const VolumeIcon = () => {
    if (volume === 0) return <VolumeX className="h-5 w-5" />;
    if (volume < 0.5) return <Volume1 className="h-5 w-5" />;
    return <Volume2 className="h-5 w-5" />;
  };
  
  // Handle seeking in the track
  const handleSeek = (value: number[]) => {
    seekTo(value[0]);
  };
  
  // Handle volume change
  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };
  
  // If no song is playing, render minimal player
  if (!currentSong) {
    return (
      <div className="fixed bottom-16 left-0 right-0 md:bottom-0 md:left-16 glass-effect h-16 flex items-center px-4">
        <div className="w-full text-center text-sm text-gray-400">
          Select a song to play
        </div>
      </div>
    );
  }
  
  return (
    <div className="fixed bottom-16 left-0 right-0 md:bottom-0 md:left-16 glass-effect border-t border-gray-800 h-16 md:h-20 z-40">
      <div className="flex items-center h-full px-3 md:px-6">
        {/* Song info */}
        <div className="flex items-center flex-1 min-w-0 md:w-1/3">
          <img
            src={currentSong.imageUrl}
            alt={currentSong.title}
            className="w-10 h-10 rounded md:w-14 md:h-14"
          />
          <div className="ml-3 truncate">
            <div className="font-medium truncate">{currentSong.title}</div>
            <div className="text-xs text-gray-400 truncate">{currentSong.artist}</div>
          </div>
        </div>
        
        {/* Player controls - visible on all screens */}
        <div className="flex items-center justify-center flex-1 md:w-1/3">
          <button
            onClick={previousSong}
            className="text-gray-400 hover:text-white mr-4 md:mr-6"
          >
            <SkipBack className="h-4 w-4 md:h-5 md:w-5" />
          </button>
          
          <button
            onClick={togglePlayPause}
            className="bg-white text-black rounded-full p-1 hover:bg-gray-200 transition"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 md:h-6 md:w-6" />
            ) : (
              <Play className="h-5 w-5 md:h-6 md:w-6" />
            )}
          </button>
          
          <button
            onClick={nextSong}
            className="text-gray-400 hover:text-white ml-4 md:ml-6"
          >
            <SkipForward className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>
        
        {/* Progress bar and volume - adjusts for screen size */}
        <div className="hidden md:flex items-center justify-end flex-1 md:w-1/3">
          <span className="text-xs text-gray-400 mr-2 w-10">
            {formatTime(currentTime)}
          </span>
          
          <div className="w-full max-w-xs mx-2">
            <Slider
              value={[currentTime]}
              min={0}
              max={duration || 1}
              step={0.1}
              onValueChange={handleSeek}
              className="w-full"
            />
          </div>
          
          <span className="text-xs text-gray-400 ml-2 w-10">
            {formatTime(duration)}
          </span>
          
          <div className="ml-4 relative">
            <button
              onClick={() => setShowVolumeControl(!showVolumeControl)}
              className="text-gray-400 hover:text-white"
            >
              <VolumeIcon />
            </button>
            
            {showVolumeControl && (
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 rounded p-2 w-24">
                <Slider
                  value={[volume]}
                  min={0}
                  max={1}
                  step={0.01}
                  onValueChange={handleVolumeChange}
                  orientation="vertical"
                  className="h-20"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile progress bar */}
      <div className="md:hidden absolute bottom-0 left-0 right-0">
        <Slider
          value={[currentTime]}
          min={0}
          max={duration || 1}
          step={0.1}
          onValueChange={handleSeek}
          className="w-full h-1"
        />
      </div>
    </div>
  );
};

export default Player;
