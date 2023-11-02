import React from 'react';

import { Header } from './components/Header';
import { Map } from './components/Map';

import './index.scss';

export function App() {
  const [ipData, setIpData] = React.useState({});

  const fetchIp = async (ip) => {
    const res = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await res.json();
    setIpData(data);
  };

  React.useEffect(() => {
    try {
      (async () => {
        const res = await fetch('http://ip-api.com/json/');
        const data = await res.json();
        setIpData(data);
      })();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  return (
    <div className="wrapper">
      <Header
        fetchIp={fetchIp}
        query={ipData.query}
        city={ipData.city}
        region={ipData.regionName}
        country={ipData.country}
        timezone={ipData.timezone}
        isp={ipData.isp}
      />
      <Map lat={ipData.lat} lon={ipData.lon} />
    </div>
  );
}
