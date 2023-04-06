import { produtoService } from "../service/produto-service.js"
const formulario = document.querySelector('[data-form]')
formulario.addEventListener('submit', (evento) => {
    console.log('Evento submit disparado!');
    evento.preventDefault()
    const imagem = evento.target.querySelector('[data-imagem]').value
    const nome = evento.target.querySelector('[data-nome]').value
    const preco = evento.target.querySelector('[data-preco]').value

    console.log(`imagem: ${imagem}, nome: ${nome}, preco: ${preco}`);

    produtoService.criaProduto(imagem, nome, preco)
    .then(() => {
        window.location.href = '../telas/sucesso-cadastro-produto.html'
    })
})