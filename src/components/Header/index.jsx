import React from 'react';
import { isIP } from 'is-ip';

import styles from './Header.module.scss';

export const Header = ({ fetchIp, query, city, region, country, timezone, isp }) => {
  const [ipText, setTextIp] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isIP(ipText)) {
      fetchIp(ipText);
    } else {
      console.log('invalid IP');
    }
  };

  return (
    <div className={styles.root}>
      <h1>IP Address Tracker</h1>
      <div className={styles.input}>
        <form onSubmit={handleSubmit}>
          <input
            value={ipText}
            onChange={(event) => setTextIp(event.target.value)}
            placeholder="Search for any IP address or domain"
          />
          <button type="submit">
            <img src={'./img/icon-arrow.svg'} />
          </button>
        </form>
      </div>
      <div className={styles.info}>
        <div>
          <h2>IP ADDRESS</h2>
          <p>{query}</p>
        </div>
        <div>
          <h2>LOCATION</h2>
          <p>
            {city}, {region} {country}
          </p>
        </div>
        <div>
          <h2>TIMEZONE</h2>
          <p>UTC {timezone}</p>
        </div>
        <div>
          <h2>ISP</h2>
          <p>{isp}</p>
        </div>
      </div>
    </div>
  );
};
