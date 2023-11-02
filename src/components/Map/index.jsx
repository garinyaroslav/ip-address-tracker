import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './Map.module.scss';

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center);
  return null;
}

export const Map = ({ lat = 1, lon = 1 }) => {
  const position = { lat, lon };

  const customIcon = new Icon({
    iconUrl: './img/icon-location.svg',
    iconSize: [45, 60],
  });

  return (
    <div className={styles.root}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <ChangeView center={position} />
        <TileLayer
          attribution="Google Maps"
          url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          maxZoom={20}
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            Location of this <br /> ip or domain
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
