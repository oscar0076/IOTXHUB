import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';


const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [results, setResults] = useState([]);

  // Simulez une recherche
  useEffect(() => {
    // Remplacez cette partie par une requête API si nécessaire
    const mockData = [
      { id: 1, name: 'Arduino Uno' },
      { id: 2, name: 'Raspberry Pi 4' },
      { id: 3, name: 'ESP32 Dev Kit' },
    ];
    const filteredData = mockData.filter((item) =>
      item.name.toLowerCase().includes(query?.toLowerCase() || '')
    );
    setResults(filteredData);
  }, [query]);

  return (
    <div>
      <h1>Résultats pour "{query}"</h1>
      <ul>
        {results.length > 0 ? (
          results.map((result) => <li key={result.id}>{result.name}</li>)
        ) : (
          <p>Aucun résultat trouvé.</p>
        )}
      </ul>
    </div>
  );
};

export default SearchResults;
