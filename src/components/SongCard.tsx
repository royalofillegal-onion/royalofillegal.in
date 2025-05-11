
import React from "react";
import { Play, Plus } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Song } from "@/data/songs";
import { usePlayer } from "@/context/PlayerContext";
import { cn } from "@/lib/utils";
import { playlists } from "@/data/playlists";

interface SongCardProps {
  song: Song;
  className?: string;
  variant?: "default" | "compact";
}

const SongCard = ({ song, className, variant = "default" }: SongCardProps) => {
  const { playSong, addToQueue } = usePlayer();
  
  const handlePlay = () => {
    playSong(song);
  };
  
  if (variant === "compact") {
    return (
      <div 
        className={cn(
          "flex items-center p-2 hover:bg-gray-800/50 rounded-md group cursor-pointer",
          className
        )}
        onClick={handlePlay}
      >
        <div className="relative w-10 h-10 rounded overflow-hidden mr-3">
          <img 
            src={song.imageUrl} 
            alt={song.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
            <Play className="h-4 w-4" />
          </div>
        </div>
        <div className="flex-grow min-w-0">
          <h3 className="font-medium text-sm truncate">{song.title}</h3>
          <p className="text-gray-400 text-xs truncate">{song.artist}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button 
              className="ml-2 p-1 text-gray-400 hover:text-white rounded-full opacity-0 group-hover:opacity-100 hover:bg-gray-700/50 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <Plus className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-gray-900 border-gray-800">
            <DropdownMenuItem 
              className="text-sm cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                addToQueue(song);
              }}
            >
              Add to Queue
            </DropdownMenuItem>
            {playlists.map((playlist) => (
              <DropdownMenuItem 
                key={playlist.id} 
                className="text-sm cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  // Add to playlist implementation
                }}
              >
                Add to {playlist.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
  
  return (
    <div 
      className={cn(
        "flex flex-col w-36 md:w-44 group transition-all duration-200 hover:bg-gray-800/50 p-3 rounded-md cursor-pointer",
        className
      )}
      onClick={handlePlay}
    >
      <div 
        className="relative aspect-square overflow-hidden rounded-md shadow-lg mb-2"
      >
        <img 
          src={song.imageUrl} 
          alt={song.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="w-12 h-12 rounded-full bg-music-accent flex items-center justify-center">
            <Play className="h-6 w-6 text-black" />
          </div>
        </div>
      </div>
      <div className="mt-1 flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm truncate">{song.title}</h3>
          <p className="text-gray-400 text-xs truncate">{song.artist}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button 
              className="ml-1 p-1 text-gray-400 hover:text-white rounded-full opacity-0 group-hover:opacity-100 hover:bg-gray-700/50 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <Plus className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-gray-900 border-gray-800">
            <DropdownMenuItem 
              className="text-sm cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                addToQueue(song);
              }}
            >
              Add to Queue
            </DropdownMenuItem>
            {playlists.map((playlist) => (
              <DropdownMenuItem 
                key={playlist.id} 
                className="text-sm cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                }}
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

export default SongCard;
