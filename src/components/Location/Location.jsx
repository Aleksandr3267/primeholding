import './Location.css'
import './MediaLocation.css'

import MapComponent from "../MapComponent/MapComponent";

function Location() {
    return (
        <>
            <section className="location position-relative">
                {/* <h1 className="hero-title title title-lg">
                    Локация
                </h1> */}
                <div className="location-map position-relative">
                    <MapComponent />
                    {/* <div class="contact-map__number-of-objects">
                        <div class="objects-count">6</div>
                        Объектов
                    </div> */}
                    <div className="link-map__button">
                        <a href="https://go.2gis.com/ruz92" target='_blank' rel="noreferrer">Открыть в 2Gis</a>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Location;