const $salida = document.getElementById('salida')
const $inputBox = document.getElementById('encriptando')
const $btnEnc = document.getElementById('btn-enc')
const $btnDesc = document.getElementById('btn-desc')
const btnCop = document.createElement('button')
btnCop.setAttribute('type', 'button')
btnCop.classList.add('btn', 'btn-copiar')
btnCop.textContent = 'Copiar'

const palabras_enc = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat',
}

const palabras_desc = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u',
}

$btnEnc.addEventListener('click', () => {
    const DECRYPTED_MESSAGE = encMessage($inputBox.value)
    const $parrafo = document.createElement('p')
    $parrafo.textContent = DECRYPTED_MESSAGE
    $parrafo.classList.add('salida')
    $parrafo.id = 'salida'
    $salida.classList.add('procesado')
    $salida.innerHTML = ''
    $salida.appendChild($parrafo)
    $salida.appendChild(btnCop)
})

$btnDesc.addEventListener('click', () => {
    const ENCRYPTED_MESSAGE = decMessage($inputBox.value)
    const $parrafo = document.createElement('P')
    $parrafo.textContent = ENCRYPTED_MESSAGE
    $parrafo.classList.add('salida')
    $parrafo.id = 'salida'
    $salida.classList.add('procesado')
    $salida.innerHTML = ''
    $salida.appendChild($parrafo)
    $salida.appendChild(btnCop)
})

btnCop.addEventListener('click', () => copyResult())

function copyResult() {
    const $salida = document.getElementById('salida')
    navigator.clipboard.writeText($salida.textContent)
}

function encMessage(message) {
    let newMessage = message.replace(/[aeiou]/g, (match) => palabras_enc[match])
    return newMessage
}

function decMessage(message) {
    let newMessage = message.replace(/(ai|enter|imes|ober|ufat)/g, (match) => palabras_desc[match])
    return newMessage
}
