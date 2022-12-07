import React, {  useState, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader  } from '@react-google-maps/api';
import InfoModal from "../InfoModal";

const containerStyle = {
    width: '100%',
    height: '600px'
};

const Map = ({ data, isChecked, isPlay }) => {
    const endPosition = data[data.length-1];
    const startPosition = data[0];
    const center = {
        lat: Number(endPosition[5]),
        lng: Number(endPosition[4])
    };

    const [selectedMarker, setSelectedMarker] = useState(null);
    const [position, setPosition] = useState({
        lat: Number(endPosition[5]),
        lng: Number(endPosition[4])
    });

    useEffect(() => {
        changePosition()
    }, [isChecked])

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCLvi-3-bXqi0q-esiBaI4P_k3LQKSJxko"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])


    const showInfoModal = (item) => {
        setSelectedMarker(item);
    };
    //
    const hideInfoModal = () => {
        setSelectedMarker(null);
    };

    const changePosition = () => {
        isChecked ? setPosition({
                lat: Number(startPosition[5]),
                lng: Number(startPosition[4])
            }) :
        setPosition({
            lat: Number(endPosition[5]),
            lng: Number(endPosition[4])
        })
    }

    const showPlayMarker = () => {
        return data.map((i, index) => {
            return (
                <Marker
                    key={index}
                    position={{
                        lat: Number(i[5] || 0),
                        lng: Number(i[4] || 0)
                    }}
                    onClick={(e) => {
                        showInfoModal(i);
                    }}
                    icon={'/marker.svg'}
                >
                </Marker>
            )
        })
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {
                isPlay ? showPlayMarker() :
                    <Marker
                        position={position}
                        onClick={(e) => {
                            showInfoModal(endPosition);
                        }}
                        icon={'/marker.svg'}
                    >
                    </Marker>
            }

            {selectedMarker ? (
                <InfoModal selectedMarker={selectedMarker} onCloseClick={hideInfoModal} />
            ) : null}
        </GoogleMap>
    ) : <></>
};

export default React.memo(Map);
