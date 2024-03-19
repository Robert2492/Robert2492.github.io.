
const encriptar = document.getElementById("btnEncriptar");
const desEncriptar = document.getElementById("btnDesencriptar");
const copiar = document.getElementById("btn-copia");
const textoInicial = document.getElementById("inputTexto");
const textFinal = document.getElementById("msj-encriptado");
const diamante = document.getElementById("img-diamante");
const textoInfo = document.getElementById("advertencia");
const rigth = document.getElementById("msjEncriptado");

const remplace = (newvalue) => {
	textFinal.innerHTML = newvalue;
	textFinal.classList.add("ajustar");
	rigth.classList.add("ajuste");
	textoInicial.value = "";
	textoInicial.style.height = "auto";
	textoInicial.placeholder = "Ingrese el texto aquí";
	diamante.classList.add("ocultar");
	textoInfo.classList.add("ocultar");
	copiar.classList.remove("btn-ocultar");
}

const reset = () => {
	textoInicial.value = "";
    textoInicial.style.height = "auto";
	textFinal.innerHTML = "";
	rigth.classList.remove("ajuste")
	textFinal.classList.remove("ajustar");
	diamante.classList.remove("ocultar");
	textFinal.placeholder = "Ningún mensaje fue encontrado";
	textoInfo.classList.remove("ocultar")
	copiar.classList.add("btn-ocultar");
	textoInicial.focus();
};


const matriz_code_enc = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];
const matriz_code_des = [
    ["u", "ufat"],
    ["o", "ober"],
    ["a", "ai"],    
    ["i", "imes"],
    ["e", "enter"],
];

encriptar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function encript(newtext) {
			for (let i = 0; i < matriz_code_enc.length; i++) {
				if (newtext.includes(matriz_code_enc[i][0])) {
					newtext = newtext.replaceAll(matriz_code_enc[i][0], matriz_code_enc[i][1]);
				};
			};
			return newtext;
		};
		remplace(encript(texto));
	} else {
		alert("Ingrese texto para encriptar");
		reset();
	};
});

desEncriptar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function desencript(newtext) {
			for (let i = 0; i < matriz_code_des.length; i++) {
				if (newtext.includes(matriz_code_des[i][1])) {
					newtext = newtext.replaceAll(matriz_code_des[i][1], matriz_code_des[i][0]);
				};
			};
			return newtext;
		};
		remplace(desencript(texto));
	} else {

		alert("Ingrese texto a desencriptar");
		reset();
	};
});

copiar.addEventListener("click", () => {
	let texto = textFinal;
	texto.select();
	document.execCommand('copy');
	alert("Texto Copiado");
	reset();
});











