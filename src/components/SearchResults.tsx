import React from "react";
import { ISearchResult } from "../types";

interface SearchResultsProps {
  results: ISearchResult[];
  loading: boolean;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results, loading }) => {
  // if (loading)
  //   return (

  //   );

  return (
    <div className="results">
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : loading ? (
        <div>
          <p>Loading</p>
        </div>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result.collectionId + result.artistName + result.trackName} className="result-item">
              {result.artworkUrl100 && (
                <img src={result.artworkUrl100} alt={result.trackName} className="result-image" />
              )}
              <div>
                <strong>{result.trackName}</strong> ({result.collectionName})
              </div>
              <div>{result.artistName}</div>
              <a href={result.trackViewUrl} target="_blank" rel="noopener noreferrer">
                View Details
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
