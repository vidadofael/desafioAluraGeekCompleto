import { produtoService } from "../service/produto-service.js";
const criaNovaDivProduto = (imagem, nome, preco) => {
    const linhaNovoProduto = document.createElement('div');
    linhaNovoProduto.classList.add('item__produto');
    linhaNovoProduto.classList.add('produto-novo');
    linhaNovoProduto.setAttribute('data-div', 'valor-comum-para-todas-as-divs');
    const conteudo = `
            <img class="img__produto" src="${imagem}" alt="imagem do produto">
            <p class="nome__produto">${nome}</p>
            <p class="preco__produto">${preco}</p>
            <a href="../telas/mais-detalhes-produtos.html">Ver mais</a>
            <div class="botoes__gestao">
                <div id="imagemExcluir" class="btn__excluir">
                    <img class="img__btn-excluir" src="../assets/icone-apagar.png" alt="botao apagar produto">
                </div>
                <div id="imagemEditar" class="btn__editar">
                    <img class="img__btn-editar" src="../assets/icone-editar.png" alt="botao editar item">
                </div>
            </div>
        `
    linhaNovoProduto.innerHTML = conteudo
    return linhaNovoProduto
}

const sessao = document.querySelector('[data-section]') /*data-tabela*/

produtoService.listaProduto() /*itera e exibe dados na tela que foram coletados pela fetch*/
.then(data => {
    data.forEach(elemento => {
        sessao.appendChild(criaNovaDivProduto(elemento.imagem, elemento.nome, elemento.preco))
})})