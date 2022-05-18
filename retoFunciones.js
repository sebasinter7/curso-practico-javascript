function calcularTotal ( precio, descuento ) {
  return total = ( precio * ( 100 - descuento ) / 100 )
}

function calcularPrecioConDescuento() {

  const inputPrice = document.getElementById( "inputPrice" )
  const inputValue = inputPrice.value

  const inputCard = document.getElementById( "inputCard" )
  const cardValue = inputCard.value

  if ( cardValue == "Tarjeta de credito" ) {

    const total = calcularTotal( inputValue, 10 )

    const resultTotal = document.getElementById( "resultTotal" )
    resultTotal.innerText = "El precio con descuento es: $ " + total

  } else if ( cardValue == "Tarjeta plata" ) {

    const total = calcularTotal( inputValue, 15 )

    const resultTotal = document.getElementById( "resultTotal" )
    resultTotal.innerText = "El precio con descuento es: $ " + total

  } else if ( cardValue == "Tarjeta negra" ) {

    const total = calcularTotal( inputValue, 20 )

    const resultTotal = document.getElementById( "resultTotal" )
    resultTotal.innerText = "El precio con descuento es: $ " + total
    
  }
}