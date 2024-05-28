import React, { createContext, useContext, useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';

const ScrollContext = createContext<number>(0);

export const useScroll = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { y: scrollY } = useWindowScroll();
  const [scrollPosition, setScrollPosition] = useState<number>(scrollY);

  useEffect(() => {
    setScrollPosition(scrollY);
  }, [scrollY]);

  return (
    <ScrollContext.Provider value={scrollPosition}>
      {children}
    </ScrollContext.Provider>
  );
};
