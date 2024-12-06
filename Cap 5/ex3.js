let nota = parseFloat(prompt("Informe a primeira nota: "))
let nota1 = parseFloat(prompt("Informe a segunda nota: "))
let nota2 = parseFloat(prompt("Informe a terceira nota: "))

let media = (nota + nota1 + nota2) / 3
if (media >= 7){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}