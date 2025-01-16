import React from "react";
import { ISearchResult } from "../types";

interface SearchResultsProps {
  results: ISearchResult[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="results">
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {results.map((result, index) => (
            <li key={index} className="result-item">
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
