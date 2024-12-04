
let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        success, 
        error, 
        options
    )
}else{
    alert("El servicio de geolocalización no está disponible")
}


function success(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map('map',{
        center:[latitude, longitude], 
        zoom: 14
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: 'Mi openStreetMap'}).addTo(map)

    let control = L.Routing.control({
        waypoints: [
            L.latLng(latitude, longitude),
            L.latLng(40.380,-3.735)
        ],
        language: 'es',

    }).addTo(map);
}

function error(){
    let map = L.map('map',{
        center:[latitude, longitude], 
        zoom: 14
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: 'Mi openStreetMap'}).addTo(map)

}