//Programa una función que determine si un número es primo

function primos(num = undefined) {
	if (!num) return console.warn(`No has ingresado un numero`);
	if (typeof num !== "number") return console.error();
	`El dato ingresado "${num}" es un string`;
	const arregloResultados = [];

	for (let i = 1; i < 10; i++) {
		let division = num / i;
		!Number.isInteger(division)
			? arregloResultados.push("No es Entero")
			: arregloResultados.push("Es Entero");
	}

	let b = 0;

	for (let a = 0; a < arregloResultados.length; a++) {
		if (arregloResultados[a] === "Es Entero") {
			b = b + 1;
		}
	}

	b === 1 || b === 2
		? console.log(`%c El numero ${num} si es primo`, "color:green")
		: console.log(`%c El numero ${num} no es primo`, "color:red");
}

primos(17);

// Programa una función que determine si un número es par o impar

const pares = (num) => {
	if (!num) return console.warn(`No has ingresado un numero`);
	if (typeof num !== "number")
		return console.error(`El dato ingresado "${num}" es un string`);
	let resultado = num / 2;
	if (Number.isInteger(resultado)) {
		console.log(`%c El numero ${num} es par`, "color:green");
	} else {
		console.log(`%c El numero ${num} es impar`, "color:red");
	}
};

pares(4);

//Programa una función para convertir grados Celsius a Fahrenheit y viceversa, yo hice dos funciones para ello

const celcius = (grados) => {
	if (!grados) return console.warn(`No has ingresado los °C a convertir`);
	if (typeof grados !== "number")
		return console.error(
			`El dato ingresado "${grados}" es un string`
		);
	let farenheit = (grados * 9) / 5 + 32;
	console.log(
		`%c ${grados}° C es igual a ${farenheit}° Farenheit`,
		"color:pink"
	);
};

celcius(1);

const farenheit = (grados = 0) => {
	if (typeof grados !== "number")
		return console.error(
			`El dato ingresado "${grados}" es un string`
		);
	let celcius = (grados-32)*5/ 9;
	console.log(
		`%c ${grados}° F es igual a ${celcius.toFixed(1)}° Celcius`,
		"color:yellow"
	);
};

farenheit(64);
