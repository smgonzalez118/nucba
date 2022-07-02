async function getRecomend() {
    
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
    
    let date = ""
    if (f.getDay() == 7) {
        date = (f.getFullYear()) + "-" + formatea(f.getMonth()+1) + "-" + formatea(f.getDate()-2)
    } else if (f.getDay() == 6) {
        date = (f.getFullYear()) + "-" + formatea(f.getMonth()+1) + "-" + formatea(f.getDate()-1)
    } else {
        date = (f.getFullYear()) + "-" + formatea(f.getMonth()+1) + "-" + formatea(f.getDate())
    }
    console.log(date)

    //let date = (f.getFullYear()) + "-" + formatea(f.getMonth()+1) + "-" + formatea(f.getDate())
    //date = "2022-07-01"

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
    $precio_actual = document.querySelector("#precioActual")
    $mediaMovil10d = document.querySelector("#mediaMovil10d")
    $recomendacion = document.querySelector("#recomendacion")
    
    console.log(mediaMovil10d)
    console.log(precio_actual)
    if (precio_actual > mediaMovil10d) {
        recomendacion = "COMPRA"
        $recomendacion.classList.add("verde")
    } else {
        recomendacion = "VENTA"
        $recomendacion.classList.add("rojo")
    }


    $precio_actual.textContent = `PRECIO ACTUAL: $ ${precio_actual}`
    $mediaMovil10d.textContent = `MEDIA MÓVIL DE 10 DÍAS: $ ${mediaMovil10d}`
    $recomendacion.textContent = recomendacion
    
    })
}


// Me queda adaptar esta página para celular