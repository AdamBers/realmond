import React from "react";

type MediaType = "movie" | "music" | "podcast" | "tvShow" | "ebook" | "software" | "all";

interface CategorySelectorProps {
  media: MediaType;
  onMediaChange: (media: MediaType) => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({ media, onMediaChange }) => {
  const categories: MediaType[] = ["all", "movie", "music", "podcast", "tvShow", "ebook", "software"];

  return (
    <div className="category-selector">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-button ${media === category ? "active" : ""}`}
          onClick={() => onMediaChange(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};
