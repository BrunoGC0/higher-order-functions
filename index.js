// const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
//     const mesAtual = 2
//     let AnoDeNascimento = 2023 - idade
//     if(mesDeNascimento > mesAtual) AnoDeNascimento--
//     imprimir(AnoDeNascimento)
// }

// let imprimirAnoDeNascimento = AnoDeNascimento => {
//     console.log('Seu ano de nascimento é ' + AnoDeNascimento)
// }

// calcularAnoDeNascimento(22, 11, imprimirAnoDeNascimento)


function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(2))
console.log(triplicar(2))
console.log(quadruplicar(2))