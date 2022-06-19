
const divisas = document.getElementById('divisas');



verDivisas.onclick = function()
{
    console.log("Ver divisas...");
    let jsCreateDivisas = document.createElement("p");

    jsCreateDivisas.innerHTML = "Cotizaciones divisas"; //TODO: Podriamos cargar las divisas directamente debajo como otra div / o abrir otra página
    divisas.appendChild(jsCreateDivisas);
}