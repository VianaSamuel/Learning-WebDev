//=====INICIALIZAÇÃO=====//
const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const clear = document.getElementById('clear')
const equal = document.getElementById('equal')
const result = document.getElementById('result')
const charKeys = document.querySelectorAll('.char-key')
const themeSwitcher = document.getElementById('theme-switcher')
const copyToClipboard = document.getElementById('copy-to-clipboard')

// foco inicial no input
input.focus()

// teclas validas
const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const validSymbols = ['/', '*', '-', '+', '%', '(', ')']

//=====CLIQUES=====//
charKeys.forEach(function (btn){
    btn.addEventListener('click', function(){
        clearAll()
        const value = btn.dataset.value
        input.value += value
    })
})

//=====TECLAS=====//
input.addEventListener('keydown', function(ev){
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
})

//=====RESULTADO=====//
equal.addEventListener('click', calculate)
function calculate(){
    result.value = 'ERRO'
    result.classList.add('error')
    const calc = eval(input.value)
    result.value = calc
    result.classList.remove('error')
}

//=====CLEAR=====//
clear.addEventListener('click', function(){
    clearAll()
    result.value = ''
    input.value = ''
    input.focus()
})
function clearAll(){
    copyToClipboard.innerText = 'Copiar'
    copyToClipboard.classList.remove('success')
    result.classList.remove('error')
}

//=====COPIAR=====//
copyToClipboard.addEventListener('click', function(ev){
    const btn = ev.currentTarget
    if (btn.innerText === 'Copiar'){
        btn.innerText = 'Copiado!'
        btn.classList.add('success')
        navigator.clipboard.writeText(result.value)
    } else clearAll()
})

//=====ALTERAR TEMA=====//
themeSwitcher.addEventListener('click', function(){
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})