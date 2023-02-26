import { Map } from "../Map/Map";

export const Main = () => {
    return (
        <>
            <div id="map" className="artboard">
                <Map lat={48.7751878} lon={9.1871763} zoom={10} />
            </div>
        </>
    );
};
