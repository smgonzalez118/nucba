async function getData() {
    
    $ticker = document.querySelector("#ticker").value.toUpperCase()

    const API_KEY = "LT6OSQ25CS08KJTY"

    let endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${$ticker}&apikey=${API_KEY}`

    let f = new Date()
    function formatea(fecha) {
        fecha = fecha.toString()
      if (fecha.length === 1) {
          return `0${fecha}`
      } else {
          return fecha
      }
    }
    
    let date = (f.getFullYear()) + "-" + formatea(f.getMonth()+1) + "-" + formatea(f.getDate())


    const nuevo = await fetch(endpoint).then(
        data => data.json())
    .then(data => {
    let precio_actual = parseFloat(data['Time Series (Daily)'][date]["4. close"])
    let suma = 0
    let contador = 0
    for (let fecha in data['Time Series (Daily)']) {
        let precio = data['Time Series (Daily)'][fecha]["4. close"]
        suma += parseFloat(precio)
        contador += 1
        if (contador === 20) {
            break
        }
    }
    
    let recomendacion = ""
    let mediaMovil10d = parseFloat((suma / 20).toFixed(2))
    console.log(mediaMovil10d)
    console.log(precio_actual)
    if (precio_actual > mediaMovil10d) {
        recomendacion = "COMPRA"
    } else {
        recomendacion = "VENTA"
    }

    $precio_actual = document.querySelector("#precioActual")
    $mediaMovil10d = document.querySelector("#mediaMovil10d")
    $recomendacion = document.querySelector("#recomendacion")

    $precio_actual.textContent = `$ ${precio_actual}`
    $mediaMovil10d.textContent = `$ ${mediaMovil10d}`
    $recomendacion.textContent = recomendacion

    // Colocar el valor del precio actual en el DOM, en algún span
    // Colocar el valor de la MM de 10 ruedas en el DOM, en algún span
    
    })
}
 