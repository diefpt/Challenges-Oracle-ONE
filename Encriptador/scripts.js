const text = document.querySelector('#text');
const encriptar = document.querySelector('#encriptar');
const desencriptar = document.querySelector('#desencriptar');
const resultado = document.querySelector('#parrafo-display');

const errorImg = document.querySelector('.no-mensaje-img');
const errorMsj = document.querySelector('.no-mensaje');

const CLAVE = {a: 'ai', e: 'enter', i: 'imes', o: 'ober', u: 'ufat',};

const cipher = msj => {
    if(!msj) {
        errorImg.style.visibility = 'visible';
        errorMsj.style.visibility = 'visible';
        resultado.style.top = '20%';
    } else {
        errorImg.style.visibility = 'hidden';
        errorMsj.style.visibility = 'hidden';
        resultado.style.top = '-45%';
    }

    resultado.innerHTML = msj ? msj.replace(/[a-z]/g, char => CLAVE.hasOwnProperty(char) ? CLAVE[char] : char) : 'Ingresa el texto que desees encriptar o desencriptar';
}    

const deCipher = msj => {
    if(!msj) {
        errorImg.style.visibility = 'visible';
        errorMsj.style.visibility = 'visible';
        resultado.style.top = '20%';
    } else {
        errorImg.style.visibility = 'hidden';
        errorMsj.style.visibility = 'hidden';
        resultado.style.top = '-45%';
    }

    resultado.innerHTML = msj ?  msj.replaceAll('ai', 'a')
                             .replaceAll('enter', 'e')
                             .replaceAll('imes', 'i')
                             .replaceAll('ober', 'o')
                             .replaceAll('ufat', 'u') :
    'Ingresa el texto que desees encriptar o desencriptar';
}

encriptar.addEventListener('click', () => {
    cipher(text.value);
});

desencriptar.addEventListener('click', () => {
    deCipher(text.value);
})