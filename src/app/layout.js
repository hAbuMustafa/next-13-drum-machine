import React from 'react';

import Header from '../components/Header';

import './styles.css';
import VolumeProvider from '../components/VolumeProvider/VolumeProvider';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <VolumeProvider>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </VolumeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
