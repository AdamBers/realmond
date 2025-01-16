// api/search.ts
export const fetchSearchResults = async (query: string, media: string) => {
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=${media}&limit=10&country=US`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results; // Возвращаем только результаты поиска
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
};
