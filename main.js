let num1 = 0
let num2 = 0
let resultado = 0

function receberNum1(){
    num1 = document.querySelector("#num1").valueAsNumber
    calcularResultado()
}

function receberNum2(){
    num2 = document.querySelector("#num2").valueAsNumber
    calcularResultado()
}

function calcularResultado(){
    let resultadoStrong = document.querySelector(".resultado")
    resultado = num1 + num2
    resultadoStrong.textContent = `${resultado.toFixed(2)}`
}