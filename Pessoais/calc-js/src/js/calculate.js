//=====DEPENDÊNCIAS=====//
const result = document.querySelector('#result')

//=====CALCULAR RESULTADO=====//
export default function calculate(){
    result.value = 'ERRO'
    result.classList.add('error')

    const calc = eval(input.value)

    result.value = calc
    result.classList.remove('error')
}