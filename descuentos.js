// const precioOriginal = 120
// const descuento = 15

// const porcentajePrecioConDescuento = 100 - descuento
// const precioConDescuento = ( precioOriginal * ( 100 - descuento ) / 100 )

// console.log( {
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// } )

function calcularTotal ( precio, descuento ) {
    return total = ( precio * ( 100 - descuento ) / 100 )
}

//console.log( "El precio a pagar son: " + "$" + calcularTotal( 100, 15 ) )

function totalConDescuento ( ) {
    const inputPrice = document.getElementById( "inputPrice" )
    const inputValue = inputPrice.value

    const inputDiscount = document.getElementById( "inputDiscount" )
    const discountValue = inputDiscount.value

    const total = calcularTotal( inputValue, discountValue )

    const resultTotal = document.getElementById( "resultTotal" )
    resultTotal.innerText = "El precio con descuento es: $ " + total
}