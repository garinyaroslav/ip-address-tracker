import React from 'react';

import { Header } from './components/Header';
import { Map } from './components/Map';

import './index.scss';

export function App() {
  const [ipData, setIpData] = React.useState({});

  const fetchIp = async (ip) => {
    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await res.json();
    setIpData(data);
  };

  React.useEffect(() => {
    try {
      (async () => {
        const res = await fetch('https://ipapi.co/json/');
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
        query={ipData.ip}
        city={ipData.city}
        region={ipData.regionName}
        country={ipData.country_name}
        timezone={ipData.timezone}
        isp={ipData.org}
      />
      <Map lat={ipData.latitude} lon={ipData.longitude} />
    </div>
  );
}
