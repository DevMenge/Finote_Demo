document.addEventListener("DOMContentLoaded", () => {

    const markers =
    document.querySelectorAll(".station-marker");

    /* =========================
       DESKTOP ELEMENTS
    ========================= */

    const stationName =
    document.getElementById("stationName");

    const stationLocation =
    document.getElementById("stationLocation");

    const stationDistance =
    document.getElementById("stationDistance");

    const gasolineStatus =
    document.getElementById("gasolineStatus");

    const dieselStatus =
    document.getElementById("dieselStatus");

    const keroseneStatus =
    document.getElementById("keroseneStatus");

    const evStatus =
    document.getElementById("evStatus");

    const gasolinePrice =
    document.getElementById("gasolinePrice");

    const dieselPrice =
    document.getElementById("dieselPrice");

    const lastUpdated =
    document.getElementById("lastUpdated");

    /* =========================
       MOBILE ELEMENTS
    ========================= */

    const mobileSheet =
    document.getElementById("mobileSheet");

    const mobileStationName =
    document.getElementById("mobileStationName");

    const mobileLocation =
    document.getElementById("mobileLocation");

    const mobileLocationText =
    document.getElementById("mobileLocationText");

    const mobileDistance =
    document.getElementById("mobileDistance");

    const mobileGasoline =
    document.getElementById("mobileGasoline");

    const mobileDiesel =
    document.getElementById("mobileDiesel");

    const mobileKerosene =
    document.getElementById("mobileKerosene");

    const mobileEV =
    document.getElementById("mobileEV");

    const mobileGasPrice =
    document.getElementById("mobileGasPrice");

    const mobileDieselPrice =
    document.getElementById("mobileDieselPrice");

    const mobileUpdated =
    document.getElementById("mobileUpdated");

    const mobileAvailabilityBadge =
    document.getElementById(
        "mobileAvailabilityBadge"
    );

    /* =========================
       ACTION BUTTONS
    ========================= */

    const callBtn =
    document.getElementById("callBtn");

    const mobileCallBtn =
    document.getElementById("mobileCallBtn");

    /* =========================
       CURRENT STATION
    ========================= */

    let currentStation =
    stations[0];

    /* =========================
       UPDATE UI
    ========================= */

    function updateStationUI(station){

        currentStation = station;

        /* Desktop */

        stationName.textContent =
        station.name;

        stationLocation.textContent =
        station.location;

        stationDistance.textContent =
        station.distance;

        gasolineStatus.textContent =
        station.gasoline;

        dieselStatus.textContent =
        station.diesel;

        keroseneStatus.textContent =
        station.kerosene;

        evStatus.textContent =
        station.ev;

        gasolinePrice.textContent =
        station.gasolinePrice;

        dieselPrice.textContent =
        station.dieselPrice;

        lastUpdated.textContent =
        "Last Updated: " +
        station.updated;

        /* Mobile */

        mobileStationName.textContent =
        station.name;

        mobileLocation.textContent =
        station.location;

        mobileLocationText.textContent =
        station.location;

        mobileDistance.textContent =
        station.distance;

        mobileGasoline.textContent =
        station.gasoline;

        mobileDiesel.textContent =
        station.diesel;

        mobileKerosene.textContent =
        station.kerosene;

        mobileEV.textContent =
        station.ev;

        mobileGasPrice.textContent =
        station.gasolinePrice;

        mobileDieselPrice.textContent =
        station.dieselPrice;

        mobileUpdated.textContent =
        "Last Updated: " +
        station.updated;

        /* Availability Badge */

        if(
            station.gasoline ===
            "Available"
        ){

            mobileAvailabilityBadge.textContent =
            "⛽ Available";

        }

        else if(
            station.gasoline ===
            "Low Stock"
        ){

            mobileAvailabilityBadge.textContent =
            "⚠️ Low Stock";

        }

        else{

            mobileAvailabilityBadge.textContent =
            "❌ Unavailable";

        }

    }

    /* =========================
       MARKER CLICK
    ========================= */

    markers.forEach(marker => {

        marker.addEventListener(
            "click",
            () => {

                markers.forEach(m =>
                    m.classList.remove(
                        "active"
                    )
                );

                marker.classList.add(
                    "active"
                );

                const stationId =
                Number(
                    marker.dataset.id
                );

                const station =
                stations.find(
                    s =>
                    s.id === stationId
                );

                if(!station) return;

                updateStationUI(
                    station
                );

                /* Auto open mobile */

                if(
                    window.innerWidth <= 992
                ){

                    mobileSheet.classList.add(
                        "expanded"
                    );

                }

            }
        );

    });

    /* =========================
       SEARCH
    ========================= */

    const searchInput =
    document.getElementById(
        "stationSearch"
    );

    searchInput.addEventListener(
        "input",
        function(){

            const query =
            this.value.toLowerCase();

            markers.forEach(
                marker => {

                    const stationId =
                    Number(
                        marker.dataset.id
                    );

                    const station =
                    stations.find(
                        s =>
                        s.id === stationId
                    );

                    marker.style.display =
                    station.name
                    .toLowerCase()
                    .includes(query)
                    ? "flex"
                    : "none";

                }
            );

        }
    );

    /* =========================
       MOBILE DRAG
    ========================= */

    const handleArea =
    document.querySelector(
        ".sheet-handle-area"
    );

    let startY = 0;

    handleArea.addEventListener(
        "touchstart",
        e => {

            startY =
            e.touches[0].clientY;

        }
    );

    handleArea.addEventListener(
        "touchend",
        e => {

            const endY =
            e.changedTouches[0].clientY;

            const diff =
            startY - endY;

            if(diff > 40){

                mobileSheet.classList.add(
                    "expanded"
                );

            }

            if(diff < -40){

                mobileSheet.classList.remove(
                    "expanded"
                );

            }

        }
    );

    /* =========================
       CALL BUTTONS
    ========================= */

    function callStation(){

        window.location.href =
        `tel:${currentStation.phone}`;

    }

    if(callBtn){

        callBtn.addEventListener(
            "click",
            callStation
        );

    }

    if(mobileCallBtn){

        mobileCallBtn.addEventListener(
            "click",
            callStation
        );

    }

    /* =========================
       INITIAL STATION
    ========================= */

    updateStationUI(
        stations[0]
    );

    if(markers[0]){

        markers[0].classList.add(
            "active"
        );

    }

});
