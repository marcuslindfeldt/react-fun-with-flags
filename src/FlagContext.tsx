import React from 'react';

export type FlagContextType = {
  [key: string]: boolean;
};

const FlagContext = React.createContext<FlagContextType>({});

export default FlagContext;
