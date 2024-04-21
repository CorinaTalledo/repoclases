
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);


const renderData = (data) =>{
    console.log(data);
    const {main, name, wind} = data

    $("#place").innerText = `${name}`

    $("#current-temp").innerText = `${main.temp}°C `

    $("#min-temp").innerText = `${main.temp_min}°C `
    $("#max-temp").innerText = `${main.temp_max}°C `
    $("#humidity").innerText = `${main.humidity}% `
    $("#wind").innerText = `${wind.speed}m/s `
}


$("#city").addEventListener("change", () => getCity($("#city").value))


////////////////////////


// fetch >> va a la api y el metodo por defecto, el verbo o metodo es get al menos que le digamos otro verbo.



// FUNCION PARA TRAER LOS TRABAJOS DE LA API (SE LLAMA CADA VEZ QUE SE VA A ACTUALIZAR EL HTML)
// FUNCION PARA AGREGAR LOS TRABAJOS (METODO POST)
// FUNCION PARA ELIMINAR (delete)
// FUNCION PARA ACTUALIZAR (patch)
// funcion para buscar



// VISTAS: (Funcion que muestra y oculta tiene que ir en otro doc: dom.js)
// - Empleos disponibles
// - Crear un trabajo
// - Editar un trabajo


// Para agregar el spinner. Se agrega en el html y se oculta. Cuando empieza la funcion que hace el fetch, mostramos el spinner (con la funcion de vista). Setearlo con set time out
