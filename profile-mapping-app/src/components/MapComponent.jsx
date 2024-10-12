import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet
import 'leaflet/dist/leaflet.css';

// Define a custom icon
const customIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // URL for the custom icon image
    iconSize: [40, 40], // Size of the icon
    iconAnchor: [20, 40], // Anchor the icon at its base
    popupAnchor: [0, -40] // Where the popup should open relative to the icon
});

const MapComponent = ({ position, address }) => {
    return (
        <MapContainer
            center={position}
            zoom={13}
            style={{ height: '100vh', width: '100vw' }}
            className="map"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
                <Popup>
                    <div>

                        <h4>{address}</h4>

                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;
