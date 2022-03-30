import React, { useState, createContext } from 'react';

interface ISearchCtx {
  searchModalOpen: boolean;
  toggleSearchModal?: (value: boolean) => void;
}

const defaultState = {
  searchModalOpen: false,
};

// The ISearchCtx needs a Partial wrapper because toggleSearchModal is possibly undefined
export const SearchCtx = createContext<Partial<ISearchCtx>>(defaultState);

export const SearchProvider: React.FC = ({ children }) => {
  const [searchModalOpen, setsearchModalOpen] = useState(
    defaultState.searchModalOpen
  );

  const toggleSearchModal = (value: boolean) => {
    setsearchModalOpen(value);
  };

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
