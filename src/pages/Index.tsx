
import React from "react";
import SliderRow from "@/components/SliderRow";
import SongCard from "@/components/SongCard";
import PlaylistCard from "@/components/PlaylistCard";
import { trendingSongs, popularSongs, newReleases } from "@/data/songs";
import { playlists } from "@/data/playlists";
import { usePlayer } from "@/context/PlayerContext";

const Index = () => {
  const { recentlyPlayed } = usePlayer();
  
  return (
    <div className="pt-6 pb-32 md:pb-40 px-4 md:px-8 md:ml-16">
      <h1 className="text-3xl font-bold mb-6 mt-2 animate-slide-in">Welcome to RoyalStar Music</h1>
      
      {recentlyPlayed.length > 0 && (
        <SliderRow title="Recently Played" className="animate-fade-in">
          {recentlyPlayed.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </SliderRow>
      )}
      
      <SliderRow title="Trending Now" className="animate-slide-up" style={{animationDelay: "100ms"}}>
        {trendingSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </SliderRow>
      
      <SliderRow title="Featured Playlists" className="animate-slide-up" style={{animationDelay: "200ms"}}>
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </SliderRow>
      
      <SliderRow title="Popular Songs" className="animate-slide-up" style={{animationDelay: "300ms"}}>
        {popularSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </SliderRow>
      
      <SliderRow title="New Releases" className="animate-slide-up" style={{animationDelay: "400ms"}}>
        {newReleases.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </SliderRow>
    </div>
  );
};

export default Index;
