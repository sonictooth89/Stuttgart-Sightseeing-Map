import { Marker, Popup } from "react-leaflet";

export const Place = (props) => {
    return (
        <Marker position={[props.lat, props.lon]}>
            <Popup>
                <h2>{props.place}</h2>
                <p>{props.description}</p>
            </Popup>
        </Marker>
    );
};
