//=====DEPENDÊNCIAS=====//
import { clearAll } from "./clear.js"
import calculate from "./calculate.js"
const input = document.querySelector('#input')

//=====TRATAR CLIQUES=====//
export function handleClicking(ev){
    clearAll()
    const value = ev.currentTarget.dataset.value
    input.value += value
}

//=====TRATAR DIGITAÇÃO=====//
export function handleTyping(ev){
    // validação de teclas
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
    const validSymbols = ['/', '*', '-', '+', '%', '(', ')']

    ev.preventDefault()
    clearAll()

    if (validKeys.includes(ev.key)){
        input.value += ev.key
        return
    }
    if (validSymbols.includes(ev.key)){
        input.value += ' ' + ev.key + ' '
        return
    }
    if (ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter'){
        calculate()
    }
}