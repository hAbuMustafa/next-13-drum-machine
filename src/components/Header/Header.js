'use client';
import React from 'react';
import { Volume2, VolumeX } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styles from './Header.module.css';
import { useVolume } from '../VolumeProvider/VolumeProvider';

function Header() {
  const id = React.useId();
  const { volume, setVolume } = useVolume();

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper
        className={styles.innerWrapper}
      >
        <a href="/">Kool Website</a>

        <button
          onClick={() => {
            setVolume(!volume);
          }}
        >
          {volume ? (
            <Volume2 />
          ) : (
            <VolumeX />
          )}
          <VisuallyHidden>
            {volume
              ? 'Disable sound effects'
              : 'Enable sound effects'}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
