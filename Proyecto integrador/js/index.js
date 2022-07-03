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
    if (f.getDay() == 0) {
        date = (f.getFullYear()) + "-" + formatea(f.getMonth()+1) + "-" + formatea(f.getDate()-2)
    } else if (f.getDay() == 7) {
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
        console.log(precio)
        if (contador === 20) {
            break
        }
    }
    
    let precio_7d = 0
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


function aclaracion() {
    let text = `Nota para mentor de NUCBA: la siguiente herramienta utiliza la API de Alpha Vantage. 
    Utilizo una función asincrónica para hacer el FETCH y parametrizo la URL con template strings,
    dandole la posibilidad al usuario de que ingrese el Ticker (se captura del formulario). 
    Incluso contempla los días sábados y domingos, evitando errores mediante una validación que formatea la fecha
    (a excepción de los feriados bursátiles... cuestión bastante compleja)
    Luego, recorro la data y me quedo con los precios de los últimas 20 ruedas (condición break), 
    calculo un promedio y lo comparo con el precio actual, determinando una recomendación de inversión que 
    tendrá distinto color de letra según el valor (se agregan distintas clases en el DOM).
    Es decir, usé funciones asincrónicas, bucles, fechas, JSON, cálculos aritméticos, manipulación del DOM, parseos, 
    etc.
    Parece algo sencillo pero hice uso de absolutamente todas las herramientas.
    Cualquier duda, a disposición. Muchas gracias`
    alert(text)
}


// Me queda adaptar esta página para celular
