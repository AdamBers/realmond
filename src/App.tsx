import { useState, useEffect } from "react";
import { fetchSearchResults } from "./api/search";
import { ISearchResult } from "./types";
import { SearchBar } from "./components/SearchBar";
import { SearchResults } from "./components/SearchResults";
import { CategorySelector } from "./components/CategorySelector";
import "./App.css";

type MediaType = "movie" | "music" | "podcast" | "tvShow" | "ebook" | "software" | "all";

function App() {
  const [results, setResults] = useState<ISearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState<MediaType>("all");
  const [query, setQuery] = useState<string>("");

  const handleSearch = async (query: string) => {
    if (query.trim() === "") return;
    setLoading(true);
    const results = await fetchSearchResults(query, media);
    setResults(results);
    setLoading(false);
  };

  const handleMediaChange = (media: MediaType) => {
    setMedia(media);
  };

  const handleQueryChange = (query: string) => {
    setQuery(query);
  };

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [media, query]);

  return (
    <>
      <div className="main-container">
        <h1>Media Search</h1>
        <SearchBar onSearch={handleQueryChange} />
        <CategorySelector media={media} onMediaChange={handleMediaChange} />
         <SearchResults results={results} loading={loading} />
      </div>
    </>
  );
}

export default App;
