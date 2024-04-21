
// 1) PASAR LOS ELEMENTOS DEL HTML AL JS
const caja = document.getElementById('box')  // box seria el id en el html
const boton = document.getElementById('boton')
const input = document.getElementById('mi-input')
let colorcito = ''


// 2) ARMAR LAS FUNCIONES PARA QUE EL ELEMENTO SE MODIFIQUE
const cambioDeColor = () =>{
    caja.style.backgroundColor = 'red' 
};


const escribiendo = () =>{

}


// 3) ARMAR EL EVENTO
boton.addEventListener('click', () => cambioDeColor());

input.addEventListener('input', () => escribiendo());









