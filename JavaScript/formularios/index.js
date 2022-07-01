function enviaForm() {
    event.preventDefault()
    state = {nombre: undefined, email: undefined, password: undefined}
    $nombre = document.querySelector("#nombre")
    $mail = document.querySelector("#email")
    $password = document.querySelector("#pass")

    if (!$nombre.value) {
        $nombre.classList.add("error")
    } else {
        state.nombre = $nombre.value
        $nombre.classList.remove("error")
    }

    if (!$mail.value) {
        $mail.classList.add("error")
    } else {
        state.email = $mail.value
        $mail.classList.remove("error")
    }

    if (!$password.value) {
        $password.classList.add("error")
    } else {
        state.password = $password.value
        $password.classList.remove("error")
    }

    if ($nombre.value && $mail.value && $password.value) {
        $resultado = document.querySelector("#resultado")
        $resultado.innerText=""
 
        $lista = document.createElement("ul")
        for (let atrib in state) {
            $elem = document.createElement("li")
            $elem.innerText = `${atrib.toLocaleUpperCase()}: ${state[atrib]}`
            $lista.appendChild($elem)
        }
        $resultado.appendChild($lista)
    }
}

