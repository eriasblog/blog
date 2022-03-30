import React, { createContext, useState } from 'react';

interface IHeader {
  navOpen: boolean;
  toggleNav?: (value: boolean) => void;
}

const defaultState = {
  navOpen: false,
};

// The ISearchCtx needs a Partial wrapper because toggleSearchModal is possibly undefined
export const HeaderCtx = createContext<Partial<IHeader>>(defaultState);

export const HeaderProvider: React.FC = ({ children }) => {
  const [navOpen, setNavOpen] = useState<boolean>(defaultState.navOpen);

  const toggleNav = (value: boolean) => {
    setNavOpen(value);
  };

  return (
    <HeaderCtx.Provider value={{ navOpen, toggleNav }}>
      {children}
    </HeaderCtx.Provider>
  );
};
