
import React from "react";
import { Play, Plus } from "lucide-react";
import { Song } from "@/data/songs";
import { usePlayer } from "@/context/PlayerContext";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { playlists } from "@/data/playlists";
import { cn } from "@/lib/utils";

interface SongRowProps {
  song: Song;
  index: number;
  isActive?: boolean;
}

const SongRow = ({ song, index, isActive = false }: SongRowProps) => {
  const { playSong, isPlaying, currentSong, togglePlayPause, addToQueue } = usePlayer();
  
  const isCurrentSong = currentSong?.id === song.id;
  
  const handlePlay = () => {
    if (isCurrentSong) {
      togglePlayPause();
    } else {
      playSong(song);
    }
  };
  
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  return (
    <div 
      className={cn(
        "flex items-center px-4 py-2 rounded-md group hover:bg-gray-800/50",
        isActive && "bg-gray-800/30"
      )}
    >
      <div className="w-8 text-right text-gray-400 text-sm mr-4">
        <span className="group-hover:hidden block">{index + 1}</span>
        <button 
          className="hidden group-hover:block"
          onClick={handlePlay}
        >
          {isCurrentSong && isPlaying ? (
            <div className="w-4 h-4 rounded-full bg-music-accent animate-pulse"></div>
          ) : (
            <Play className="h-4 w-4" />
          )}
        </button>
      </div>
      
      <div className="flex items-center flex-1">
        <img 
          src={song.imageUrl} 
          alt={song.title}
          className="w-10 h-10 rounded mr-3"
        />
        <div>
          <h3 className={cn(
            "font-medium text-sm",
            isCurrentSong && "text-music-accent"
          )}>
            {song.title}
          </h3>
          <p className="text-gray-400 text-xs">{song.artist}</p>
        </div>
      </div>
      
      <div className="text-gray-400 text-sm hidden md:block">
        {song.album}
      </div>
      
      <div className="flex items-center ml-auto">
        <span className="text-gray-400 text-sm mr-4">
          {formatDuration(song.duration)}
        </span>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-1 text-gray-400 hover:text-white rounded-full opacity-0 group-hover:opacity-100 hover:bg-gray-700/50 transition-all">
              <Plus className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-gray-900 border-gray-800">
            <DropdownMenuItem 
              className="text-sm cursor-pointer"
              onClick={() => addToQueue(song)}
            >
              Add to Queue
            </DropdownMenuItem>
            {playlists.map((playlist) => (
              <DropdownMenuItem 
                key={playlist.id} 
                className="text-sm cursor-pointer"
              >
                Add to {playlist.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SongRow;
