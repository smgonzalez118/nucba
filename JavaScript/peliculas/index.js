film = {name: undefined, year: undefined}
films = []
function enviaForm() {
    event.preventDefault()
    $name = document.querySelector("#name")
    $year = document.querySelector("#year")

    if (!$name.value) {
        $name.classList.add("error")
    } else {
        film.name = $name.value
        $name.classList.remove("error")
    }

    if (!$year.value) {
        $year.classList.add("error")
    } else {
        film.year = $year.value
        $year.classList.remove("error")
    }

    if ($name.value && $year.value) {
        films.push(film)
        $resultado = document.querySelector("#resultado")
 
        $lista = document.createElement("ul")
        $elem = document.createElement("li")
        
        for (let fil of films) {
            $elem.innerText = `NAME: ${fil.name} - YEAR: ${fil.year}`
            $lista.appendChild($elem)
            $resultado.appendChild($lista)
        }
    }

    if (films.length === 5) {
        alert("Buenos gustos")
    }
}

