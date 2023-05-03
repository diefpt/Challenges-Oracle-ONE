const text = document.querySelector('#text');
const encriptar = document.querySelector('#encriptar');
const desencriptar = document.querySelector('#desencriptar');
const resultado = document.querySelector('#parrafo-display');

const CLAVE = {a: 'ai', e: 'enter', i: 'imes', o: 'ober', u: 'ufat',};

const cipher = msj => {
    resultado.innerHTML = msj.replace(/[a-z]/g, char => CLAVE.hasOwnProperty(char) ? CLAVE[char] : char);
}    

const deCipher = msj => {
    resultado.innerHTML = msj.replaceAll('ai', 'a')
                             .replaceAll('enter', 'e')
                             .replaceAll('imes', 'i')
                             .replaceAll('ober', 'o')
                             .replaceAll('ufat', 'u');
}

encriptar.addEventListener('click', () => {
    cipher(text.value);
});

desencriptar.addEventListener('click', () => {
    deCipher(text.value);
})