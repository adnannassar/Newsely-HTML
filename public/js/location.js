let lat, lon;

function getLocation() {
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        return "Geolocation is not supported by this browser";
    }
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERR:
            console.log("An unknown error occurred.");
            break;
    }
}

function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    const url =
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=41ad88a1f768b910e390f99a84773acb`
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    request.onload = () => {
        if (request.status === 200) {
            document.getElementById("city").innerHTML = JSON.parse(request.response).name + ",  " + (JSON
                .parse(request.response).main.temp | 0) + '&#8451';
        } else {
            console.log(`error ${request.status} ${request.statusText}`);
        }
    }
}


getLocation();