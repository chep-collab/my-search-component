import React from 'react';

const SuggestionList = ({ suggestions }) => {
  return (
    <ul className="mt-2">
      {suggestions.map((suggestion, index) => (
        <li key={index} className="bg-white hover:bg-gray-100 py-2 px-4 border-b border-gray-200">
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default SuggestionList;

