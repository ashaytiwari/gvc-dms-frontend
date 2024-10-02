import Image from 'next/image';

import offlineImage from '@/assets/images/offline-image.svg';

import styles from './OfflineWindow.module.scss';

function OfflineWindow() {

  const offlineImageAttributes = {
    src: offlineImage,
    className: styles.offlineImage,
    alt: 'offline-asset'
  };

  const tryAgainAttributes = {
    className: 'application-solid-button',
    onClick() {
      location.reload();
    }
  };

  return (
    <div id={styles.offlineWindowMain}>
      <div className={styles.offlineImageContainer}>
        <Image {...offlineImageAttributes} />
      </div>
      <div className={styles.content}>
        <h3>Whoops!!</h3>
        <p>No internet connection was found. Check your connection or try again.</p>
        <button {...tryAgainAttributes}>Try again</button>
      </div>
    </div>
  );

}

export default OfflineWindow;