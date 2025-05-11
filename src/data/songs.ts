
export interface Song {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  audioUrl: string;
  duration: number; // in seconds
  album?: string;
  year?: number;
  genre?: string;
}

export const songs: Song[] = [
  {
    id: "song1",
    title: "Midnight Groove",
    artist: "Luna Ray",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=500&auto=format&fit=crop",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3",
    duration: 122,
    album: "Night Vibes",
    year: 2023,
    genre: "Electronic"
  },
  {
    id: "song2",
    title: "Summer Breeze",
    artist: "Ocean Waves",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=500&auto=format&fit=crop",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-sunny-day-137.mp3",
    duration: 177,
    album: "Beach Days",
    year: 2023,
    genre: "Chill"
  },
  {
    id: "song3",
    title: "Urban Beat",
    artist: "Metro Pulse",
    imageUrl: "https://images.unsplash.com/photo-1531850039645-c4d50cc21ccf?q=80&w=500&auto=format&fit=crop",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-621.mp3",
    duration: 109,
    album: "City Life",
    year: 2022,
    genre: "Hip Hop"
  },
  {
    id: "song4",
    title: "Electric Dreams",
    artist: "Neon Sky",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500&auto=format&fit=crop",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3",
    duration: 98,
    album: "Future Sound",
    year: 2023,
    genre: "Electronic"
  },
  {
    id: "song5",
    title: "Mystic Forest",
    artist: "Wild Echo",
    imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=500&auto=format&fit=crop",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-serene-view-140.mp3",
    duration: 114,
    album: "Nature Sounds",
    year: 2022,
    genre: "Ambient"
  },
  {
    id: "song6",
    title: "Retro Funk",
    artist: "Groove Machine",
    imageUrl: "https://images.unsplash.com/photo-1584374119339-61d3c536d759?q=80&w=500&auto=format&fit=crop",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-infected-by-the-80s-690.mp3",
    duration: 132,
    album: "Time Machine",
    year: 2022,
    genre: "Funk"
  },
  {
    id: "song7",
    title: "Dawn Horizon",
    artist: "Solar Flux",
    imageUrl: "https://images.unsplash.com/photo-1610552050890-fe99536c2615?q=80&w=500&auto=format&fit=crop",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3",
    duration: 145,
    album: "New Beginnings",
    year: 2023,
    genre: "Ambient"
  },
  {
    id: "song8",
    title: "Jazz Café",
    artist: "Smooth Quartet",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=500&auto=format&fit=crop",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-jazz-bar-168.mp3",
    duration: 167,
    album: "Late Night",
    year: 2021,
    genre: "Jazz"
  },
  {
    id: "song9",
    title: "Digital Pulse",
    artist: "Code Runner",
    imageUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=500&auto=format&fit=crop",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-games-worldbeat-466.mp3",
    duration: 78,
    album: "Algorithm",
    year: 2023,
    genre: "Electronic"
  },
  {
    id: "song10",
    title: "Acoustic Morning",
    artist: "String Theory",
    imageUrl: "https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?q=80&w=500&auto=format&fit=crop",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-guitar-of-home-756.mp3",
    duration: 156,
    album: "Unplugged",
    year: 2022,
    genre: "Acoustic"
  },
  {
    id: "song11",
    title: "Neon Nights",
    artist: "Cyber Funk",
    imageUrl: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=500&auto=format&fit=crop",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-621.mp3",
    duration: 92,
    album: "Retrowave",
    year: 2023,
    genre: "Synthwave"
  },
  {
    id: "song12",
    title: "Desert Wind",
    artist: "Nomad Soul",
    imageUrl: "https://images.unsplash.com/photo-1616431842618-731174c5e5be?q=80&w=500&auto=format&fit=crop",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-serene-view-140.mp3",
    duration: 187,
    album: "Journeys",
    year: 2022,
    genre: "World"
  },
  {
    id: "song13",
    title: "Cosmic Voyage",
    artist: "Stellar Dreams",
    imageUrl: "https://images.unsplash.com/photo-1537420327992-d6e192287183?q=80&w=500&auto=format&fit=crop",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3",
    duration: 204,
    album: "Galaxy",
    year: 2023,
    genre: "Ambient"
  },
  {
    id: "song14",
    title: "Urban Jungle",
    artist: "Street Beat",
    imageUrl: "https://images.unsplash.com/photo-1572123748421-44414b1763df?q=80&w=500&auto=format&fit=crop",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-621.mp3",
    duration: 136,
    album: "Concrete",
    year: 2022,
    genre: "Hip Hop"
  },
  {
    id: "song15",
    title: "Mountain Echo",
    artist: "Alpine Sounds",
    imageUrl: "https://images.unsplash.com/photo-1610809027249-86c649feacd5?q=80&w=500&auto=format&fit=crop",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-serene-view-140.mp3",
    duration: 144,
    album: "Peaks",
    year: 2021,
    genre: "Folk"
  }
];

// Create song category collections
export const trendingSongs = [songs[0], songs[3], songs[5], songs[11], songs[8]];
export const popularSongs = [songs[1], songs[4], songs[6], songs[9], songs[12]];
export const newReleases = [songs[2], songs[7], songs[10], songs[13], songs[14]];
