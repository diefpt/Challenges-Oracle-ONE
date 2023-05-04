const text = document.querySelector('#text');
const encriptar = document.querySelector('#encriptar');
const desencriptar = document.querySelector('#desencriptar');
const resultado = document.querySelector('#parrafo-display');
const success = document.querySelector('#success');
const error = document.querySelector('#error');
const copy = document.querySelector('#copiar');
const CLAVE = {a: 'ai', e: 'enter', i: 'imes', o: 'ober', u: 'ufat',};

const messageDisplay = msj => {
    if(!msj) {
        error.style.visibility = 'visible';
        success.style.visibility = 'hidden';
    } else {
        success.style.visibility = 'visible';
        error.style.visibility = 'hidden';
    }
}

const cipher = msj => {
    messageDisplay(msj);
    resultado.innerHTML = msj ? 
    msj.replace(/[a-z]/g, char => CLAVE.hasOwnProperty(char) ? CLAVE[char] : char) : 
    'Ingresa el texto que desees encriptar o desencriptar';
}    

const deCipher = msj => {
    messageDisplay(msj);
    resultado.innerHTML = msj ?  msj.replaceAll('ai', 'a')
                             .replaceAll('enter', 'e')
                             .replaceAll('imes', 'i')
                             .replaceAll('ober', 'o')
                             .replaceAll('ufat', 'u') :
    'Ingresa el texto que desees encriptar o desencriptar';
}

encriptar.addEventListener('click', () => {cipher(text.value);});
desencriptar.addEventListener('click', () => {deCipher(text.value);});
copy.addEventListener('click', () => {
    navigator.clipboard.writeText(resultado.innerHTML);
});