// Código del cuadrado

console.group( "Cuadrado" )

const ladoCuadrado = 5
console.log( "Los lados del cudrado miden: " + 5 + "cm" )

const perimetroCuadrado = ladoCuadrado * 4
console.log( "El perímetro del cudrado mide: " + perimetroCuadrado + "cm" )

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log( "El área del cudrado mide: " + areaCuadrado + "cm^2" )

console.groupEnd( )

// Código del triángulo

console.group( "Triángulo" )

const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
console.log( "Los lados del triángulo miden: " + ladoTriangulo1 + "cm" + " y " + ladoTriangulo2 + "cm" + ", y la base mide: " + baseTriangulo + "cm")

const alturaTriangulo = 5.5
console.log( "La altura del triángulo mide: " + alturaTriangulo + "cm" )

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log( "El perímetro del triángulo mide: " + perimetroTriangulo + "cm" )

const areaTriangulo = ( baseTriangulo * alturaTriangulo ) / 2
console.log( "El área del triángulo mide: " + areaTriangulo + "cm^2" )

console.groupEnd( )

// Código del Círculo

console.group( "Círculo" )

// Radio

const radioCirculo = 4
console.log( "El radio del círculo mide: " + radioCirculo + "cm" )

// Diámetro

const diametroCirculo = radioCirculo * 2
console.log( "El diámetro del círculo mide: " + diametroCirculo + "cm" )

// PI

const PI = Math.PI
console.log( "El PI es: " + PI )

// Circunferencia
const perimetroCirculo = diametroCirculo * PI
console.log( "El perimetro del círculo mide: " + perimetroCirculo + "cm" )

// Area

const areaCirculo = ( radioCirculo * radioCirculo ) * PI
console.log( "El área del círculo mide: " + areaCirculo + "cm^2" )

console.groupEnd( )