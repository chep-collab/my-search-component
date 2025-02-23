import React from 'react';

const SuggestionList = ({ suggestions }) => {
  return (
    <ul>
      {suggestions.map((suggestion, index) => (
        <li key={index} className="py-2 px-4 border-b border-gray-200">{suggestion}</li>
      ))}
    </ul>
  );
};

export default SuggestionList;
