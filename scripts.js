const textInput = document.querySelector('#input');
const textDisplay = document.querySelector('#display');

const buttonCipher = document.querySelector('#cipher');
const buttonDecipher = document.querySelector('#decipher');
const buttonCopy = document.querySelector('#copy');

const KEY = {a: 'ai', e: 'enter', i: 'imes', o: 'ober', u: 'ufat',};
let errorMsj = '<h3>Ningún mensaje fue encontrado</h3><p>Ingresa el texto que desees encriptar o desencriptar</p>';

const windowWidth = screen.width;
const img = document.querySelector('.no-message-img');
const displayDiv = document.querySelector('.display');
if(windowWidth <= 850) {
    img.remove();
} else {
    errorMsj = '<img src="imagenes/muñeco.png" class="no-mensaje-img" width="250px">' + errorMsj;
}

cipher = text => {
    buttonCopy.style.visibility = text ? 'visible' : 'hidden';
    displayDiv.style.padding = text || windowWidth <= 850 ? '0px 8px' : '100px 8px 0px 8px';
    textDisplay.innerHTML = text ? text.replace(/[a-z]/gi, char => KEY.hasOwnProperty(char) ? KEY[char] : char) : errorMsj;
}

decipher = text => {
    buttonCopy.style.visibility = text ? 'visible' : 'hidden';
    displayDiv.style.padding = text || windowWidth <= 850 ? '0px 8px' : '100px 8px 0px 8px';
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