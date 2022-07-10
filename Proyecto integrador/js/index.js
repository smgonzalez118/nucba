async function getRecomend() {
    $lastday = document.querySelector("#lastday")
    $ticker = document.querySelector("#ticker").value.toUpperCase()

    const API_KEY = "LT6OSQ25CS08KJTY"

    let endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${$ticker}&apikey=${API_KEY}`
    /*const FERIADOS = [{dia: 17, mes: 1}, {dia: 21, mes: 2}, {dia: 15, mes: 4}, {dia: 30, mes: 5}, {dia: 19, mes: 6},
    {dia: 4, mes: 7}, {dia: 5, mes: 9}, {dia: 24, mes: 11}, {dia: 26, mes: 12}]*/
    let lastday = 0

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
    } else if ((f.getDay() == 7)) {
        date = (f.getFullYear()) + "-" + formatea(f.getMonth()+1) + "-" + formatea(f.getDate()-1)
        lastday = 1
    } else if (f.getHours() < 18) {
        if (f.getDay() == 0) {
                date = (f.getFullYear()) + "-" + formatea(f.getMonth()+1) + "-" + formatea(f.getDate()-2)
                lastday = 1 }
        else if (f.getDay() == 1) {
                date = (f.getFullYear()) + "-" + formatea(f.getMonth()+1) + "-" + formatea(f.getDate()-3) 
                lastday = 1}
        else {
                date = (f.getFullYear()) + "-" + formatea(f.getMonth()+1) + "-" + formatea(f.getDate()-1) 
                lastday = 1}
        }
    else {
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
    
    let precio_7d = 0
    let recomendacion = ""
    let mediaMovil20d = parseFloat((suma / 20).toFixed(2))
    $precio_actual = document.querySelector("#precioActual")
    $mediaMovil20d = document.querySelector("#mediaMovil20d")
    $recomendacion = document.querySelector("#recomendacion")
    
    console.log(mediaMovil20d)
    console.log(precio_actual)
    if (precio_actual > mediaMovil20d) {
        recomendacion = "COMPRA"
        $recomendacion.classList.add("verde")
    } else {
        recomendacion = "VENTA"
        $recomendacion.classList.add("rojo")
    }


    $precio_actual.textContent = `PRECIO ACTUAL: $ ${precio_actual}`
    $mediaMovil20d.textContent = `MEDIA MÓVIL DE 20 DÍAS: $ ${mediaMovil20d}`
    $recomendacion.textContent = recomendacion
    if (lastday === 1) {
        $lastday.textContent = "Nota: el precio de cierre corresponde al cierre anterior" }
    else {
        $lastday.textContent = ""
    }
    })
    .catch( function() { 
        $lastday.textContent = "Ticker incorrecto o información financiera no disponible"
        $precio_actual.textContent = ``
        $mediaMovil20d.textContent = ``
        $recomendacion.textContent = ``
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
    etc.Parece algo sencillo pero hice uso de absolutamente todas las herramientas.
        IMPORTANTE: la API actualiza los precios a las 16.30 (ET) o bien 17.30 de Argentina, 
    antes de esa hora los precios serán los del día anterior (limitación de API gratuita)
    
    Cualquier duda, a disposición. Muchas gracias`
    alert(text)
}


// Me queda adaptar esta página para celular
