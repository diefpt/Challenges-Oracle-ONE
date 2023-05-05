const text = document.querySelector('#text');
const encriptar = document.querySelector('#encriptar');
const desencriptar = document.querySelector('#desencriptar');
const resultado = document.querySelector('#parrafo-display');
const copy = document.querySelector('#copiar');
const CLAVE = {a: 'ai', e: 'enter', i: 'imes', o: 'ober', u: 'ufat',};
const errorMsj = '<br><br><br><br><br><a href="https://shorturl.at/mvY09"><img src="imagenes/5203299.jpg" class="no-mensaje-img" width="250px" alt="Imagen de storyset en Freepik"></a><h3>Ningún mensaje fue encontrado</h3><p>Ingresa el texto que desees encriptar o desencriptar</p>'

const cipher = msj => {
    copy.style.visibility = msj ? 'visible' : 'hidden';
    resultado.innerHTML = msj ? 
    msj.replace(/[a-z]/gi, char => CLAVE.hasOwnProperty(char) ? CLAVE[char] : char) : 
    errorMsj;
}    

const deCipher = msj => {
    copy.style.visibility = msj ? 'visible' : 'hidden';
    resultado.innerHTML = msj ?  msj.replaceAll('ai', 'a')
                             .replaceAll('enter', 'e')
                             .replaceAll('imes', 'i')
                             .replaceAll('ober', 'o')
                             .replaceAll('ufat', 'u') :
    errorMsj;
}

encriptar.addEventListener('click', () => {cipher(text.value);});
desencriptar.addEventListener('click', () => {deCipher(text.value);});
copy.addEventListener('click', () => {
    navigator.clipboard.writeText(resultado.innerHTML);
});