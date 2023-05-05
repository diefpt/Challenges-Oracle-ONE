const textInput = document.querySelector('#input');
const textDisplay = document.querySelector('#display');

const buttonCipher = document.querySelector('#cipher');
const buttonDecipher = document.querySelector('#decipher');
const buttonCopy = document.querySelector('#copy');

const KEY = {a: 'ai', e: 'enter', i: 'imes', o: 'ober', u: 'ufat',};
const errorMsj = '<br><br><br><br><br><a href="https://shorturl.at/mvY09"><img src="imagenes/5203299.jpg" class="no-mensaje-img" width="250px" alt="Imagen de storyset en Freepik"></a><h3>Ningún mensaje fue encontrado</h3><p>Ingresa el texto que desees encriptar o desencriptar</p>'

cipher = text => {
    buttonCopy.style.visibility = text ? 'visible' : 'hidden';
    textDisplay.innerHTML = text ? text.replace(/[a-z]/gi, char => KEY.hasOwnProperty(char) ? KEY[char] : char) : errorMsj;
}

decipher = text => {
    buttonCopy.style.visibility = text ? 'visible' : 'hidden';
    textDisplay.innerHTML = text ?  text.replaceAll('ai', 'a')
                            .replaceAll('enter', 'e')
                            .replaceAll('imes', 'i')
                            .replaceAll('ober', 'o')
                            .replaceAll('ufat', 'u') : errorMsj;
}

buttonCipher.addEventListener('click', () => {cipher(textInput.value);});
buttonDecipher.addEventListener('click', () => {decipher(textInput.value);});
buttonCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(textDisplay.innerHTML);
});