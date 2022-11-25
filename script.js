

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calcular1');
const input2 = document.querySelector('#calcular2');
const Boton = document.querySelector('#boton');
const result = document.querySelector('#result');

//detectamos cuando se da clic en el boton dentro del formulario
form.addEventListener('submit',sumarInputValues);

function sumarInputValues(event){
    event.preventDefault(); //esta linea es para no recargar la pagina al dar clic al boton
    let suma =parseInt(input1.value) + parseInt(input2.value)
    result.innerText="El Resultado de la Suma es: " + suma;
    console.log(suma)
}

Boton.addEventListener('click',btnOnClick)

 function btnOnClick(){
    let suma =parseInt(input1.value) + parseInt(input2.value)
    result.innerText="El Resultado de la Suma es: " + suma;
    console.log(suma)
 }


