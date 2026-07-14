document.addEventListener("DOMContentLoaded", () => {

const mobileStationName =
document.getElementById(
"mobileStationName"
);

const mobileStationStatus =
document.getElementById(
"mobileStationStatus"
);

const markers = document.querySelectorAll(".station-marker");

const stationName = document.getElementById("stationName");
const stationLocation = document.getElementById("stationLocation");
const stationDistance = document.getElementById("stationDistance");

const gasolineStatus = document.getElementById("gasolineStatus");
const dieselStatus = document.getElementById("dieselStatus");
const keroseneStatus = document.getElementById("keroseneStatus");
const evStatus = document.getElementById("evStatus");

const gasolinePrice = document.getElementById("gasolinePrice");
const dieselPrice = document.getElementById("dieselPrice");

const lastUpdated = document.getElementById("lastUpdated");

markers.forEach(marker => {

    marker.addEventListener("click", () => {
       markers.forEach(m =>
      m.classList.remove("active")
     );

marker.classList.add("active");

        const stationId = Number(marker.dataset.id);

        const station = stations.find(
            item => item.id === stationId
        );

        if (!station) return;

        stationName.textContent = station.name;

        stationLocation.textContent = station.location;

        stationDistance.textContent = station.distance;

        gasolineStatus.textContent = station.gasoline;

        dieselStatus.textContent = station.diesel;

        keroseneStatus.textContent = station.kerosene;

        evStatus.textContent = station.ev;

        gasolinePrice.textContent =
            station.gasolinePrice;

        dieselPrice.textContent =
            station.dieselPrice;

        lastUpdated.textContent =
            "Last Updated: " + station.updated;
mobileStationName.textContent =
station.name;

mobileStationStatus.textContent =
`Gasoline: ${station.gasoline} • Diesel: ${station.diesel}`;

    });

});
const searchInput =
document.getElementById(
"stationSearch"
);

searchInput.addEventListener(
"input",
function(){


    const query =
    this.value.toLowerCase();

    markers.forEach(marker=>{

        const stationId =
        Number(marker.dataset.id);

        const station =
        stations.find(
            s => s.id === stationId
        );

        marker.style.display =
            station.name
            .toLowerCase()
            .includes(query)
            ? "block"
            : "none";

    });

}


);


});
