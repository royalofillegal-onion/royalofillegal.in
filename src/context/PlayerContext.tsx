
import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { Song } from "@/data/songs";
import { toast } from "sonner";

interface PlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  currentTime: number;
  duration: number;
  queue: Song[];
  recentlyPlayed: Song[];
  playSong: (song: Song) => void;
  pauseSong: () => void;
  togglePlayPause: () => void;
  nextSong: () => void;
  previousSong: () => void;
  setVolume: (volume: number) => void;
  seekTo: (time: number) => void;
  addToQueue: (song: Song) => void;
  addToPlaylist: (song: Song, playlistId: string) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [queue, setQueue] = useState<Song[]>([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState<Song[]>([]);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio and recent songs from localStorage
  useEffect(() => {
    audioRef.current = new Audio();
    
    // Set up audio event listeners
    const audio = audioRef.current;
    
    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime);
    });
    
    audio.addEventListener("durationchange", () => {
      setDuration(audio.duration);
    });
    
    audio.addEventListener("ended", nextSong);
    
    audio.volume = volume;
    
    // Load recently played from localStorage
    const storedRecent = localStorage.getItem("recentlyPlayed");
    if (storedRecent) {
      try {
        setRecentlyPlayed(JSON.parse(storedRecent));
      } catch (e) {
        console.error("Error loading recently played songs", e);
      }
    }
    
    return () => {
      if (audio) {
        audio.pause();
        audio.removeEventListener("timeupdate", () => {});
        audio.removeEventListener("durationchange", () => {});
        audio.removeEventListener("ended", () => {});
      }
    };
  }, []);

  // Update audio src when current song changes
  useEffect(() => {
    if (!currentSong || !audioRef.current) return;
    
    audioRef.current.src = currentSong.audioUrl;
    
    if (isPlaying) {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      });
    }
    
    // Update recently played songs
    const updatedRecent = [currentSong, ...recentlyPlayed.filter(s => s.id !== currentSong.id)].slice(0, 10);
    setRecentlyPlayed(updatedRecent);
    localStorage.setItem("recentlyPlayed", JSON.stringify(updatedRecent));
    
  }, [currentSong]);

  // Update play/pause state
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Update volume
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, [volume]);

  const playSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const pauseSong = () => {
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    if (queue.length > 0) {
      // Play next song in queue
      const nextSong = queue[0];
      const newQueue = queue.slice(1);
      setQueue(newQueue);
      playSong(nextSong);
    } else if (currentSong) {
      // Reset to beginning for now
      seekTo(0);
      setIsPlaying(true);
    }
  };

  const previousSong = () => {
    if (currentTime > 3 && audioRef.current) {
      // If more than 3 seconds in, restart song
      audioRef.current.currentTime = 0;
    } else if (recentlyPlayed.length > 1) {
      // Play previous song
      playSong(recentlyPlayed[1]);
    }
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
  };

  const seekTo = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const addToQueue = (song: Song) => {
    setQueue([...queue, song]);
    toast.success(`Added "${song.title}" to queue`);
  };

  const addToPlaylist = (song: Song, playlistId: string) => {
    // Implementation here would depend on how playlists are stored
    // For now we'll just show a toast
    toast.success(`Added "${song.title}" to playlist`);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        volume,
        currentTime,
        duration,
        queue,
        recentlyPlayed,
        playSong,
        pauseSong,
        togglePlayPause,
        nextSong,
        previousSong,
        setVolume,
        seekTo,
        addToQueue,
        addToPlaylist,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
}
