function trianguloIsoceles (lado1, lado2, base ) {
    if ( lado1 != lado2 ) {
        alert( "Los lados deben ser iguales para ser un triángulo isoceles." )
    } else {
        const a = lado1 ** 2
        const b = ( base ** 2 ) / 4
        const altura = Math.sqrt( a - b )
        return altura
        
    }
}

function calAlturaTriangulo( ) {
    const input1 = document.getElementById( "input-lado1Triangulo" )
    const value1 = Number(input1.value)
    const input2 = document.getElementById( "input-lado2Triangulo" )
    const value2 = Number(input2.value)
    const input3 = document.getElementById( "input-baseTriangulo" )
    const value3 = Number(input3.value)
    
    const calAltura = trianguloIsoceles( value1, value2, value3 )
    alert( calAltura )
}