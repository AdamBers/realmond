import { useState } from "react";
import { fetchSearchResults } from "./api/search";
import { ISearchResult } from "./types";
import { SearchBar } from "./components/SearchBar";
import { SearchResults } from "./components/SearchResults";
import "./App.css";

type MediaType = "movie" | "music" | "podcast" | "tvShow" | "ebook" | "software" | "all";

function App() {
  const [results, setResults] = useState<ISearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState<MediaType>("all");

  console.log(results);

  const handleSearch = async (query: string) => {
    setLoading(true);
    const results = await fetchSearchResults(query, media);
    setResults(results);
    setLoading(false);
  };

  const handleMediaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMedia(e.target.value as MediaType);
  };

  return (
    <>
      <div className="main-container">
        <h1>Media Search</h1>
        <div>
          <select value={media} onChange={handleMediaChange} className="select">
            <option value="all">All</option>
            <option value="movie">Movies</option>
            <option value="music">Music</option>
            <option value="podcast">Podcasts</option>
            <option value="tvShow">TV Shows</option>
            <option value="ebook">eBooks</option>
            <option value="software">Software</option>
          </select>
        </div>
        <SearchBar onSearch={handleSearch} />
        {loading ? <p>Loading...</p> : <SearchResults results={results} />}
      </div>
    </>
  );
}

export default App;
