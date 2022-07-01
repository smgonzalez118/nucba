async function getData() {
    const URL = "https://rickandmortyapi.com/api/character"
    try {
        let req = await fetch(URL)
        let data = await req.json()
        data = data.results
        data = data.flatMap(char => ({name: char.name.toLowerCase(), image: char.image}))
        return data
    } catch(err) {
    	console.log(err)
    }
}


async function buscar() {
    event.preventDefault()
    $name = document.querySelector("#name")
    $lista = document.querySelector(".wraper")
    $lista.innerHTML = ""

    if($name.value) {
        data = await getData()
        let char = data.filter(item => item.name === $name.value.toLowerCase())[0]
        $resultado = document.createElement("li")
        $imagen = document.createElement("img")
        $desc = document.createElement("span")
            
        $imagen.src = char.image
        $desc.textContent = char.name
        $resultado.appendChild($imagen)
        $resultado.appendChild($desc)

        $lista.appendChild($resultado)
    }
}