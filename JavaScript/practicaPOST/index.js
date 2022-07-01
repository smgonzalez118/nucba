user = {title: undefined, body: undefined}
function enviaForm() {
    event.preventDefault()
    $title = document.querySelector("#title")
    $body = document.querySelector("#body")

    if (!$title.value) {
        $title.classList.add("error")
    } else {
        user.title = $title.value
        $title.classList.remove("error")
    }

    if (!$body.value) {
        $body.classList.add("error")
    } else {
        user.body = $body.value
        $body.classList.remove("error")
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    title: user.title,
    body: user.body,
    userId: 1,
     }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(response => response.json())
    .then(data => { 
            $resultado = document.querySelector("#resultado")
     
            $titulo = document.createElement("h2")
            
            $titulo.innerText = `NAME: ${data.title} - body: ${data.body}`
            $resultado.appendChild($titulo)
        })

}

