import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SuggestionList from './components/SuggestionList';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape']; // Example data

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Search Suggestions</h1>
        <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
        <SuggestionList suggestions={filteredSuggestions} />
      </div>
    </div>
  );
};

export default App;



