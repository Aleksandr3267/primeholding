import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MapComponent.css';
import './MediaMapComponent.css';
import marker from '../../assets/marker.png';
import marker2 from '../../assets/marker2.png';
import location1 from '../../assets/map-location/location1.png';
import location2 from '../../assets/map-location/location2.png';
function MapComponent() {
    const location = useLocation();
    const [map, setMap] = useState(null);


    const handleFirstItemClick = () => {
        const location = { lat: 42.82399223025309, lng: 74.63153262619508 };
        if (map) {
            map.panTo(location);
        }
    };

    const handleSecondItemClick = () => {
        const location = { lat: 42.818750, lng: 74.486518 };
        if (map) {
            map.panTo(location);
        }
    };


    useEffect(() => {
        const centerCoords = location.pathname === '/'
            ? { lat: 42.818750, lng: 74.486518 }
            : { lat: 42.82399223025309, lng: 74.63153262619508 };
        window.initMap = function () {
            const newMap = new window.google.maps.Map(document.getElementById('map'), {
                center: centerCoords,
                zoom: 16,
                styles: [
                    {
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#212121"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#212121"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.locality",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#bdbdbd"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#353535"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#333333"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#353535"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.business",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#353535"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.medical",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#3e3e3e"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#424a43"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.school",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#3e3e3e"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.sports_complex",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#353535"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#2c2c2c"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#8a8a8a"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#7f7054"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#282828"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#282828"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#282828"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#394356"
                            }
                        ]
                    }
                ],
                zoomControl: true,
                zoomControlOptions: {
                    position: window.google.maps.ControlPosition.DEFAULT,
                    style: window.google.maps.ZoomControlStyle.SMALL,
                },
                streetViewControl: false,
                fullscreenControl: false,
                mapTypeControl: false,
                scaleControl: false,
                rotateControl: false,
                gestureHandling: 'cooperative',
                keyboardShortcuts: false,
                mapTypeControlOptions: {
                    mapTypeIds: []
                }
            });
            new window.google.maps.Marker({
                position: { lat: 42.82399223025309, lng: 74.63153262619508 },
                map: newMap,
                title: 'Prime city',
                icon: marker,
            });
            new window.google.maps.Marker({
                position: { lat: 42.818750, lng: 74.486518 },
                map: newMap,
                title: 'Kochmon city',
                icon: marker2,
            });
            setMap(newMap);





        }
        function loadMap() {
            const script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA3PvGtuEXK7zlccoLKQeYyH-TtwGpeVQI&callback=initMap';
            script.defer = true;
            script.async = true;
            document.head.appendChild(script);
        }
        loadMap();
    }, []);
    return (
        <div className='Map-container-Main'>
            <div id="map" />
            <div className="left-bottom-elements">
                <div className="element" onClick={handleFirstItemClick}>

                    <img src={location1} alt="location1" />
                </div>
                <div className="element" onClick={handleSecondItemClick}>

                    <img src={location2} alt="location2" />
                </div>
            </div>
        </div>
    );
}
export default MapComponent;
