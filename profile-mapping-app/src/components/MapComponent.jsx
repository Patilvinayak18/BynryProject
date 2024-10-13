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
            style={{ height: '100%', width: '100%' }}
            className="map w-full h-full rounded-lg shadow-lg"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
                <Popup>
                    <div className="text-gray-800">
                        <h4 className="font-bold">{address}</h4>
                        <p className="text-sm">Location based on address</p>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;
