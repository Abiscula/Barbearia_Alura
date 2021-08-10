let botao = document.querySelector('[data-button-enviar]')
document.querySelector('[data-button-enviar]').disabled = true

let form_msg = document.querySelector('#mensagem')
form_msg.oninput = (txt) => { // acessa o campo de digitação
    let alerta_msg = document.querySelector('#msg')
    let tamanho = txt.target.value.length //contando quantidade da caracteres
    if(tamanho < 30) {
        form_msg.style.borderColor = '#FF0000';
        alerta_msg.innerText = `Caracteres: ${tamanho}`
        alerta_msg.style.color = '#FF0000'
    } else {
        form_msg.style.borderColor = '#008000';
        alerta_msg.innerText = `Caracteres: ${tamanho}`
        alerta_msg.style.color = '#008000'
        document.querySelector('[data-button-enviar]').disabled = false
    }
}

botao.addEventListener('click', () => {
    const nome = document.querySelector('#nome').value
    window.alert(`Olá ${nome}, sua mensagem enviada com sucesso!`)
})

