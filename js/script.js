function soma(n1, n2) {
    alert(n1 + n2)
}
function subtracao(n1, n2) {
    alert(n1 - n2)
}
function multiplicacao(n1, n2) {
    alert(n1 * n2)
}
function divisao(n1, n2) {
    alert(n1 / n2)
}

function mostrarnome() {
    let nome = prompt("Qual é seu nome?")
    alert("Olá, " + nome)
}
function areadoretangulo() {
    let base = prompt("Qual é a base")
    let altura = prompt("Qual é a altura")
    let area
    area = base * altura
    alert(area)
}
function areadocirculo() {
    const pi = 3.14
    let raio = prompt("Qual é o raio? ")
    let area = pi * raio * raio
    alert(area)
}
function areadotriangulo() {
    const a = prompt("Qual é o co? ")
    const b = prompt("Qual é a ca? ")
    const h2 = a * a * b * b
    alert(h2)
}
function dolar() {
    const dolar = 4.93
    let real = prompt("Insira um valor em reais?")
    alert(dolar * real)
}
function temp() {
    const C = prompt("Informe uma temperatura em Celsius")
    const F = (C * 1.8) + 32
    alert(F)
}
function mediarit() {
    const nota1 = prompt("Qual a primeira nota")
    const nota2 = prompt("Qual a segunda nota")
    const nota3 = prompt("Qual a terceira nota")
    const media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3
    alert(media)
}
function calcularRaizes() {
    const a = parseFloat(prompt("Informe um valor para A:"))
    const b = parseFloat(prompt("Informe um valor para B:"))
    const c = parseFloat(prompt("Informe um valor para C:"))

    const delta = (b * b) - 4 * a * c;
    const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

    alert(raiz1)
    alert(raiz2);
}
