
// Funciones de conversión de temperatura
function celsiusToFahrenheit(celsius) { return (celsius * 9/5) + 32; }
function fahrenheitToCelsius(fahrenheit) { return (fahrenheit - 32) * 5/9; }
function celsiusToKelvin(celsius) { return celsius + 273.15; }
function kelvinToCelsius(kelvin) { return kelvin - 273.15; }
function fahrenheitToKelvin(fahrenheit) { return (fahrenheit - 32) * 5/9 + 273.15; }
function kelvinToFahrenheit(kelvin) { return (kelvin - 273.15) * 9/5 + 32; }

function conversion() {
    // 1. Elementos del DOM (HTML)
    const inputOpcion = document.getElementById("opcion").value;
    const inputValor = document.getElementById("valor").value; // id="valor"
    const displayResultado = document.getElementById("resultado"); //  id="resultado"

    // 2. Validación de entrada
    if (inputValor === "") {
        alert("Por favor, ingresa un valor numérico.");
        return;
    }

    const valor = parseFloat(inputValor);
    let resultado = 0;
    let unidad = "";

    switch (inputOpcion) {
        case "1":
            resultado = celsiusToFahrenheit(valor);
            unidad = "°F";
            break;
        case "2":
            resultado = fahrenheitToCelsius(valor);
            unidad = "°C";
            break;
        case "3":
            resultado = celsiusToKelvin(valor);
            unidad = "K";
            break;
        case "4":
            resultado = kelvinToCelsius(valor);
            unidad = "°C";
            break;
        case "5":
            resultado = fahrenheitToKelvin(valor);
            unidad = "K";
            break;
        case "6":
            resultado = kelvinToFahrenheit(valor);
            unidad = "°F";
            break;
        default:
            console.error("Opción no válida");
            return;
    }

    // 4. Mostrar el resultado formateado
    displayResultado.innerText = `Resultado: ${resultado.toFixed(2)} ${unidad}`;
    console.log(`Conversión exitosa: ${resultado} ${unidad}`);
}