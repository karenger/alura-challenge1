var btnEncriptar = document.getElementById("btnEncriptar");
var btnDesencriptar = document.getElementById("btnDesencriptar");
var btnLimpiar = document.getElementById("btnLimpiar");
var btnCopiar = document.getElementById("btncopiar");
var divMuneco = document.getElementById("divMuneco");
var divTitulo = document.getElementById("divTitulo");
var DivMensaje = document.getElementById("DivMensaje");
var textResultado = document.getElementById("textResultado");

btnEncriptar.addEventListener("click", function (event) {
    var formulario = document.getElementById('form').checkValidity();
    if (formulario) {
        event.preventDefault();
        encriptarTexto();
    }
});
btnDesencriptar.addEventListener("click", function (event) {
    var formulario = document.getElementById('form').checkValidity();
    if (formulario) {
        event.preventDefault();
        desencriptarTexto();
    }
});
btnLimpiar.addEventListener("click", function (event) {
    event.preventDefault();
    mostrarElemento();
});
function capturarTexto() {
    return document.getElementById("txtTexto").value;
}

function ocultarElemento() {
    btnCopiar.textContent = "Copiar";
    divMuneco.classList.add("ocultar");
    divTitulo.classList.add("ocultar");
    DivMensaje.classList.add("ocultar");
}
function mostrarElemento() {
    document.getElementById("txtTexto").value = null;
    divMuneco.classList.remove("ocultar");
    divTitulo.classList.remove("ocultar");
    DivMensaje.classList.remove("ocultar");
}

function encriptarTexto() {
    ocultarElemento();
    var texto = capturarTexto();
    var mensaje = "";
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") mensaje += "ai";
        else if (texto[i] == "e") mensaje += "enter";
        else if (texto[i] == "i") mensaje += "imes";
        else if (texto[i] == "o") mensaje += "ober";
        else if (texto[i] == "u") mensaje += "ufat";
        else mensaje += texto[i];
    }
    textResultado.textContent = mensaje;
}
function desencriptarTexto() {
    ocultarElemento();
    var texto = capturarTexto();
    var mensaje = "";
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] + texto[i + 1] == "ai") {
            mensaje += "a";
            i += 1;
        }
        else if (texto[i] + texto[i + 1] + texto[i + 2] + texto[i + 3] + texto[i + 4] == "enter") {
            mensaje += "e";
            i += 4;
        }
        else if (texto[i] + texto[i + 1] + texto[i + 2] + texto[i + 3] == "imes") {
            mensaje += "i";
            i += 3;
        }
        else if (texto[i] + texto[i + 1] + texto[i + 2] + texto[i + 3] == "ober") {
            mensaje += "o";
            i += 3;
        }
        else if (texto[i] + texto[i + 1] + texto[i + 2] + texto[i + 3] == "ufat") {
            mensaje += "u";
            i += 3;
        }
        else mensaje += texto[i];
    }
    textResultado.textContent = mensaje;
}
function copiarTexto() {
    var aux = document.createElement("input");
    aux.setAttribute("value", textResultado.innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    btnCopiar.textContent = "¡Copiado!";
}
