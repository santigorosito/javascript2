/*console.log ("¡MIRÁ MAMÁAA, ESTOY PROGRAMANDO!")

let numeroMayor = 12;
let numeroMenor = 99;   

console.log ( numeroMayor + numeroMenor)

let nombre =  prompt("Ingrese su nombre");

console.log ("Bienvenide a nuestra primera web " + nombre)

let numberFive = (5*99);

console.log (numberFive)

let edad = prompt("Cuantos años tienes?");

console.log (edad)

let restarCien = (100 - numberFive);

console.log (restarCien)

let edat = prompt("Por favor, ingresa tu edad:");*/

//1

/*   const colorRojo = "rojo"
const colorVerde = "verde"
const colorAmarillo = "amarillo"
const preguntarColor = prompt("Ingrese un color se un semaforo")

if (preguntarColor === colorVerde) {
    alert("Puede avanzar")
} else if(preguntarColor === "rojo" && "amarillo") {
    alert("No puede avanzar")
} else {
    alert("Error: color de semafoto invalido")
}

console.log(preguntarColor)

//2

const vocal = "a"
const noVocal = "n"
const numero = "1"
const preguntarVocal = prompt("Ingrese una vocal")

if (preguntarVocal === vocal) {
    alert("Es una vocal")
} else if (preguntarVocal === "n"&& "1") {
    alert("No es una vocal")
}

console.log(preguntarVocal)

//3

const noConsonante = "a"
const consonante = "n"
const numeros = "2130213"
const preguntarConsonante = prompt("Ingrese una Consonante")

if (preguntarConsonante === consonante) {
    alert("Es una consonante")
} else if (preguntarConsonante === "1" &&"a") {
    alert("No es una consonante")
}

console.log (preguntarConsonante)

//4

const pasoTest = "si";
const tieneMultasImpagas = "no";
const pagoImpuestos = "no";
const preguntarTest = prompt("Hiciste el test?")
const preguntarMultasImpagas = prompt("Tenes multas impagas?")
const preguntarImpuestos = prompt("Pagaste los impuestos?")

if (preguntarTest === pasoTest && preguntarMultasImpagas === tieneMultasImpagas && preguntarImpuestos === "si") {
    alert("Puede renovar")
} else {
    alert("No puede renovar")
}

console.log (preguntarTest)

//5
const numeroOne = "2"
const numeroPar = prompt("Ingresa un numero");

if (numeroPar === numeroOne) {
    lert("El numero es par");
} else {
    alert("El numero es impar");
}

console.log(numeroPar)

//6

const numeroPositivo = "3"
const numeroNegativo = "-5"
const preguntarPositivoOno = prompt("Ingrese un numero positivo(3) o negativo(-5)")

if (preguntarPositivoOno === numeroPositivo){
    alert("Es positivo")
} else if (preguntarPositivoOno === "-5") {
    alrt("Es negativo")
}

console.log(preguntarPositivoOno)

//BUCLE

const valorInical = prompt("Ingrese un numero para sumar:")
const valorSumar = prompt("Ingrese otro numero:")
const resultado = valorInical + valorSumar 

for (valorInical; valorInical + valorSumar; valorInical++){
    console.log(resultado)
}
*/

//EJERCICIO 1//

/*let preguntarUsuario = prompt("Ingrese mail de usuario");
let nopi = false

for (let i = 0; i < preguntarUsuario.length; i++) {
    if (preguntarUsuario.charAt(i) === "@" ) {
        nopi = true
        break;
    }
} 
if (nopi) {
    alert("Su mail es valido")
} else {
    alert("Su mail es invalido")
}*/

//EJERCICIO 2//

let preguntarTelefono = prompt("Ingrese su numero de telefono:");

for (let i = 0; i < preguntarTelefono.length; i++) {
    if (preguntarTelefono.length >= 10) {
        alert("Su numero es valido")
        break;
    } else {
        alert("Su numero no es valido")
        break;
    }
}

// EJERCICIO 3//

/*let preguntarNumMinimo = prompt("Ingrese un numero min")
let preguntarNumMax = prompt("Ingrese un numero max")

for (let i = 0; i < preguntarNumMinimo.length && preguntarNumMax.length; i++) {
    if (i % 1 == 0) {
        alert(`El numero ${i} es impar`)
        break;
    } else if (i % 2 === 0) {
        alert(`El numero ${i} es par`)
        break;
    }
}*/