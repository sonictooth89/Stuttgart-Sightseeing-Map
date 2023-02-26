import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../../utils/fix-map-icon";
import "leaflet/dist/leaflet.css";

import "leaflet/dist/leaflet.css";
import "./Map.css";
import { Place } from "./Markers/Place";
import { dataBase } from "../../utils/db";

export const Map = (props) => {
    return (
        <div id="map">
            <MapContainer center={[props.lat, props.lon]} zoom={props.zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />

                {/* <Marker position={[props.lat, props.lon]}>
                    <Popup>
                        <h2>{props.place}</h2>
                        <p>{props.description}</p>
                    </Popup>
                </Marker> */}

                {dataBase.map((el) => (
                    <Place
                        lat={el.lat}
                        lon={el.lon}
                        place={el.place}
                        description={el.description}
                    />
                ))}
            </MapContainer>
        </div>
    );
};
