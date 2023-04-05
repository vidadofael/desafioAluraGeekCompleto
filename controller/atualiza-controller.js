import { produtoService } from "../service/produto-service.js"

const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

const inputImagem = document.querySelector('[data-img]')
const inputNome = document.querySelector('[data-name]')
const inputPreco = document.querySelector('[data-price]')

produtoService.detalhaProduto(id)
.then(dados => {
    inputImagem.value = dados.imagem
    inputNome.value = dados.nome
    inputPreco.value = dados.preco
})

const formulario = document.querySelector('[data-form-editar]') /*ou data-form*/

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    produtoService.atualizaProduto(id, inputImagem.value, inputNome.value, inputPreco.value)
    .then(() => {
        window.location.href = '../telas/edicao-concluida.html'
    })
})