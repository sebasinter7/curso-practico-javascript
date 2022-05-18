// Código del cuadrado

console.group( "Cuadrado" )

// const ladoCuadrado = 5
// console.log( "Los lados del cudrado miden: " + 5 + "cm" )

function perimetroCuadrado ( lado ) {
    return lado * 4
}
// console.log( "El perímetro del cudrado mide: " + perimetroCuadrado + "cm" )

function areaCuadrado ( lado ) {
    return lado * lado
}
// console.log( "El área del cudrado mide: " + areaCuadrado + "cm^2" )

console.groupEnd( )

// Código del triángulo

console.group( "Triángulo" )

// const ladoTriangulo1 = 6
// const ladoTriangulo2 = 6
// const baseTriangulo = 4
// console.log( "Los lados del triángulo miden: " + ladoTriangulo1 + "cm" + " y " + ladoTriangulo2 + "cm" + ", y la base mide: " + baseTriangulo + "cm")

// const alturaTriangulo = 5.5
// console.log( "La altura del triángulo mide: " + alturaTriangulo + "cm" )

function perimetroTriangulo ( lado1, lado2, base ) {
    return lado1 + lado2 + base
}
// console.log( "El perímetro del triángulo mide: " + perimetroTriangulo + "cm" )

function areaTriangulo ( base, altura ) {
    return ( base * altura ) / 2
}
// console.log( "El área del triángulo mide: " + areaTriangulo + "cm^2" )

console.groupEnd( )

// Código del Círculo

console.group( "Círculo" )

// Radio

// const radioCirculo = 4
// console.log( "El radio del círculo mide: " + radioCirculo + "cm" )

// Diámetro

function diametroCirculo ( radio ) {
    return radio * 2
}
// console.log( "El diámetro del círculo mide: " + diametroCirculo + "cm" )

// PI

const PI = Math.PI
console.log( "El PI es: " + PI )

// Circunferencia

function perimetroCirculo ( radio ) {
    const diametro = diametroCirculo ( radio )
    return diametro * PI
} 
// console.log( "El perimetro del círculo mide: " + perimetroCirculo + "cm" )

// Area

function areaCirculo ( radio ) {
    return ( radio * radio ) * PI
}
// console.log( "El área del círculo mide: " + areaCirculo + "cm^2" )

console.groupEnd( )

// Con estas funciones interactuamos con HTML

// Funciones del cuadrado

function calPerimetroCuadrado ( ) {
    const input = document.getElementById( "input-cuadrado" )
    const value = input.value

    const perimetro = perimetroCuadrado( value )
    alert( perimetro )
}

function calAreaCuadrado ( ) {
    const input = document.getElementById( "input-cuadrado" )
    const value = input.value

    const area = perimetroCuadrado( value )
    alert( area )
}

// Funciones del triangulo

function calPerimetroTriangulo ( ) {
    const input1 = document.getElementById( "input-lado1Triangulo" )
    const value1 = Number(input1.value)
    const input2 = document.getElementById( "input-lado2Triangulo" )
    const value2 = Number(input2.value)
    const input3 = document.getElementById( "input-baseTriangulo" )
    const value3 = Number(input3.value)
    
    const perimetro = perimetroTriangulo( value1, value2, value3 )
    alert( perimetro )
}

function calAreaTriangulo ( ) {
    const input1 = document.getElementById( "input-baseTriangulo" )
    const value1 = Number(input1.value)
    const input2 = document.getElementById( "input-alturaTriangulo" )
    const value2 = Number(input2.value)

    const area = areaTriangulo( value1, value2 )
    alert( area )
}

// Funciones del circulo

function calDiametroCirculo ( ) {
    const input = document.getElementById( "input-circulo" )
    const value = input.value

    const diametro = diametroCirculo( value )
    alert( diametro )
}

function calPerimetroCirculo() {
    const input = document.getElementById( "input-circulo" )
    const value = input.value

    const circunferencia = perimetroCirculo( value )
    alert( circunferencia )
}

function calAreaCirculo() {
    const input = document.getElementById( "input-circulo" )
    const value = input.value

    const area = areaCirculo( value )
    alert( area )
}