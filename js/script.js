function areadoretangulo() {
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var area = base * altura
    document.getElementById("resultado1").innerHTML = "A área do retangulo é: " + area.toFixed(2);
}

function calcularAreaCirculo() {
    var raio = parseFloat(document.getElementById("raioInput").value);
    var area = Math.PI * Math.pow(raio, 2);
    document.getElementById("resultado2").innerHTML = "A área do círculo é: " + area.toFixed(2);
}

function Hipotenusa() {
    var a = parseFloat(document.getElementById("cateto1").value);
    var b = parseFloat(document.getElementById("cateto2").value);
    const h2 = a * a * b * b
    document.getElementById("resultado3").innerHTML = "A área do triângulo é: " + h2.toFixed(2);
}
function dolar() {
    const dolar = 4.98
    var real = parseFloat(document.getElementById("reais").value);
    const conversao = dolar * real
    document.getElementById("resultado4").innerHTML = "Conversão para dolar é: " + conversao.toFixed(2);
}
function temp() {
    var C = parseFloat(document.getElementById("celsius").value);
    var F = (C * 1.8) + 32
    document.getElementById("resultado5").innerHTML = "A conversão da temperatura é: " + F.toFixed(2);
}
function mediarit() {
    var nota1 = parseFloat(document.getElementById("media1").value);
    var nota2 = parseFloat(document.getElementById("media2").value);
    var nota3 = parseFloat(document.getElementById("media3").value);
    const media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3
    document.getElementById("resultado6").innerHTML = "A média aritmetica é: " + media.toFixed(2);
}
function calcularRaizes() {
    var a = parseFloat(document.getElementById("valorA").value);
    var b = parseFloat(document.getElementById("valorB").value);
    var c = parseFloat(document.getElementById("valorC").value);

    const delta = (b * b) - 4 * a * c;
    const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

    document.getElementById("resultado7").innerHTML = "A média aritmetica é: " + raiz1.toFixed(2);
    document.getElementById("resultado8").innerHTML = "A média aritmetica é: " + raiz2.toFixed(2);
}
function converterVelocidade() {
    var KmH = parseFloat(document.getElementById("converta").value);
    const MpS = KmH * 1000 / 3600;

    document.getElementById("resultado9").innerHTML = "Conversor de Km/h por m/s " + MpS.toFixed(2);
}

function calcularTriangulo() {

    var ladoA = parseFloat(document.getElementById("ladoA").value);
    var ladoB = parseFloat(document.getElementById("ladoB").value);
    var ladoC = parseFloat(document.getElementById("ladoC").value);

    if (ladoA === ladoB && ladoB === ladoC) {
        document.getElementById("resultado10").innerText = "Triângulo Equilátero";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        document.getElementById("resultado10").innerText = "Triângulo Isósceles";
    } else {
        document.getElementById("resultado10").innerText = "Triângulo Escaleno";
    }
}

function areadotriangulo() {
    var base = parseFloat(document.getElementById("Base").value);
    var altura = parseFloat(document.getElementById("Altura").value);
    var area = (base * altura) / 2;

    document.getElementById("resultado11").innerHTML = "A area do triangulo é : " + area.toFixed(2);
}

