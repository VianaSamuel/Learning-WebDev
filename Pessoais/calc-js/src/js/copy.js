//=====DEPENDÊNCIAS=====//
import clearAll from './clear.js'
const result = document.querySelector('#result')

//=====COPIAR RESULTADO=====//
export default function copyResult(ev){
    const btn = ev.currentTarget
    if (btn.innerText === 'Copiar'){
        btn.innerText = 'Copiado!'
        btn.classList.add('success')
        navigator.clipboard.writeText(result.value)
    } else clearAll()
}