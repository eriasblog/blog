import React, { useState, useEffect, createContext, FC } from 'react';

interface ISearchCtx {
  searchModalOpen: boolean;
  toggleSearchModal?: (value: boolean) => void;
}

const defaultState = {
  searchModalOpen: false,
};

// The ISearchCtx needs a Partial wrapper because toggleSearchModal is possibly undefined
export const SearchCtx = createContext<ISearchCtx>(defaultState);

// export default Context;

export const SearchProvider: React.FC = ({ children }) => {
  const [searchModalOpen, setsearchModalOpen] = useState(
    defaultState.searchModalOpen
  );

  const toggleSearchModal = (value: boolean) => {
    setsearchModalOpen(value);
    console.log(searchModalOpen);
  };
  console.log(searchModalOpen);

  return (
    <SearchCtx.Provider
      value={{
        searchModalOpen,
        toggleSearchModal,
      }}
    >
      {children}
    </SearchCtx.Provider>
  );
};
