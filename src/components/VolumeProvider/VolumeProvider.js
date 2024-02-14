'use client';

import React, { createContext, useContext } from 'react';

const VolumeContext = createContext();

function VolumeProvider({ children }) {
  const [volume, setVolume] = React.useState(true);
  return (
    <VolumeContext.Provider value={{ volume, setVolume }}>
      {children}
    </VolumeContext.Provider>
  );
}

export function useVolume() {
  const data = useContext(VolumeContext);

  if (!data) {
    throw new Error('useVolume must be used within a VolumeProvider');
  }

  return data;
}

export default VolumeProvider;
