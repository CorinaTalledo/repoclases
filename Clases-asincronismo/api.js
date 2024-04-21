
const API_KEY = `f0b386cbf87c3b3bd8136e7704a1b8ea`;

const URL_BASE = `https://api.openweathermap.org/data/2.5/`;


const getData = () => {
    if (navigator.geolocation) {

        // Tomar el valor del value del input del alerta y buscar por ciudad en vez de lat y long

        // Si no hay geologcalizacion, mostrar pantalla que tire el clima de un lugar que nosotras querramos (option selected dentro)
        navigator.geolocation.getCurrentPosition((position) => {
            //informacion
            let lon = position.coords.longitude;
            let lat = position.coords.latitude;

            fetch(`${URL_BASE}weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=${API_KEY}`) // Busca toda la informacion de la api
            .then((response) => response.json()) // Pasa la informacion a formato JSON para que la podamos leer
            .then((data) => renderData(data)); // Al principio, despues de la flecha se puede llamar directamente a un console.log(data) para poder ver toda la info. Pero en realidad debe llamar a la funcion que va a renderizar toda la informacion, es decir la data.
        });
    } else {
        getCity($("#city").value)
    }
}


const getCity = (city) =>{
    fetch(`${URL_BASE}weather?q=${city}&lang=es&units=metric&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => renderData(data));
}


window.onload = getData()









