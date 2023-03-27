

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



