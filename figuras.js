
//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado mide: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
	return lado * 4;
} 
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
	return lado * lado;
} 
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//Codigo Triangulo
function perimetroTriangulo(lado1, lado2, lado3) {
  	return lado1 + lado2 + lado3; 
}

function areaTriangulo(lado, base) {
	const area = (lado * base) / 2; 
	return area;
}

// function idBtnPerimetro() {
// 	let btnPeri = document.ElementById(btnPeri);
// 	btnPeri.addEventListener("click", clickBtnPerimetro)
		
// }

//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
	const input = document.getElementById("inputCuadrado");
	const value = input.value;
  
	const perimetro = perimetroCuadrado(value);
	const mostrarPerimetro = document.getElementById('mostrarPerimetro');
	mostrarPerimetro.innerText = "El perimetro del cuadrado son: " + perimetro;
	// alert(perimetro);
  }
  
  function calcularAreaCuadrado() {
	const input = document.getElementById("inputCuadrado");
	const value = input.value;
  
	const area = areaCuadrado(value);
	const mostrarArea = document.getElementById("mostrarArea");
	mostrarArea.innerText = "El area del cuadrado son: " + area + "^2";
	// alert(area);
  }

function clickBtnPerimetro() {
	let textLado1 = parseInt(document.getElementById('lado1').value);	
	let textLado2 =  parseInt(document.getElementById('lado2').value);	
	let textbase =  parseInt(document.getElementById('base').value);	

	let calcularPeriTriangulo = perimetroTriangulo(textLado1, textLado2, textbase)

	let mostrarPerimetroTriangulo = document.getElementById('mostrarPerimetroTriangulo');
	mostrarPerimetroTriangulo.innerHTML = "El perimetro del triangulo son: " + calcularPeriTriangulo + "cm";	
}

function clickBtnArea() {
	let textLado1 = parseInt(document.getElementById('lado1').value);	
	// let textLado2 =  parseInt(document.getElementById('lado2').value);	
	let textbase =  parseInt(document.getElementById('base').value);	

	let calcularAreaTriangulo = areaTriangulo(textLado1, textbase)

	let mostrarAreaTriangulo = document.getElementById('mostrarAreaTriangulo');
	mostrarAreaTriangulo.innerHTML = "El área del triangulo son: " + calcularAreaTriangulo + "cm^2";	
}



