//=====DEPENDÊNCIAS=====//
const input = document.querySelector('#input')
const result = document.querySelector('#result')
const copyToClipboard = document.querySelector('#copy-to-clipboard')

//=====LIMPAR CALCULADORA=====//
export default function clearCalculator(){
    clearAll()
    result.value = ''
    input.value = ''
    input.focus()
}

//=====LIMPAR TUDO=====//
export function clearAll(){
    copyToClipboard.innerText = 'Copiar'
    copyToClipboard.classList.remove('success')
    result.classList.remove('error')
}