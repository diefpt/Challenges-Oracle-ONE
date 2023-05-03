const textp = document.getElementById('text');
const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar');
const resultado = document.getElementById('parrafo-display');

const rotate = text => {
    const a = 'a'.charCodeAt(0),
          A = 'A'.charCodeAt(0),
          key = 13;
    resultado.innerHTML = text.replace(/[a-z]/g, char => String.fromCharCode(a + (char.charCodeAt(0) - a + key) % 26))
               .replace(/[A-Z]/g, char => String.fromCharCode(A + (char.charCodeAt(0) - A + key) % 26));
}

const deRotate = text => {
    const a = 'a'.charCodeAt(0),
          A = 'A'.charCodeAt(0),
          key = 13;
    resultado.innerHTML = text.replace(/[a-z]/g, char => String.fromCharCode(a + (char.charCodeAt(0) - a + key) % 26))
               .replace(/[A-Z]/g, char => String.fromCharCode(A + (char.charCodeAt(0) - A + key) % 26));
}


encriptar.addEventListener('click', () => {
    rotate(textp.value);
});

desencriptar.addEventListener('click', () => {
    deRotate(textp.value);
})