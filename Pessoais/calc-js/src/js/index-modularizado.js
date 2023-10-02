//=====IMPORTAÇÕES=====//
import copy from './copy.js'
import calculate from './calculate.js'
import clearCalculator from './clear.js'
import switchTheme from './switchTheme.js'
import { handleClicking, handleTyping } from './keyHandlers.js'

// foco inicial no input
input.focus()

//=====TRATAR CLIQUES=====//
document.querySelectorAll('.char-key').forEach(function (btn){
    btn.addEventListener('click', handleClicking)
})

//=====TRATAR DIGITAÇÃO=====//
document.getElementById('input').addEventListener('keydown', handleTyping)

//=====CALCULAR RESULTADO=====//
document.getElementById('equal').addEventListener('click', calculate)

//=====COPIAR RESULTADO=====//
document.getElementById('copy-to-clipboard').addEventListener('click', copy)

//=====LIMPAR CALCULADORA=====//
document.getElementById('clear').addEventListener('click', clearCalculator)

//=====ALTERAR TEMA=====//
document.getElementById('theme-switcher').addEventListener('click', switchTheme)