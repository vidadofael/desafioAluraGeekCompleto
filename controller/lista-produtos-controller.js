import { produtoService } from "../service/produto-service.js";
const criaNovaDivProduto = (imagem, nome, preco, id) => {
    const linhaNovoProduto = document.createElement('div');
    linhaNovoProduto.classList.add('item__produto');
    linhaNovoProduto.classList.add('produto-novo');
    linhaNovoProduto.setAttribute('data-div', 'valor-comum-para-todas-as-divs');
    const conteudo = `
            <img class="img__produto" src="${imagem}" alt="imagem do produto" data-imagem>
            <p class="nome__produto" data-nome>${nome}</p>
            <p class="preco__produto" data-preco>R$ ${preco}</p>
            <a href="../telas/mais-detalhes-produtos.html">Ver mais</a>
            <div class="botoes__gestao">
                <div id="imagemExcluir" class="btn__excluir">
                    <img class="img__btn-excluir" src="../assets/icone-apagar.png" alt="botao apagar produto">
                </div>
                <div id="imagemEditar" class="btn__editar">
                    <a href="../telas/editar-produto.html?id=${id}">
                        <img class="img__btn-editar" src="../assets/icone-editar.png" alt="botao editar item">
                    </a>
                </div>
            </div>
        `
    linhaNovoProduto.innerHTML = conteudo
    linhaNovoProduto.dataset.id = id
    console.log(linhaNovoProduto)

    return linhaNovoProduto
}

const sessao = document.querySelector('[data-section]') /*data-tabela*/

sessao.addEventListener('click', async(evento) => {
    let ehBotaoDeletar = evento.target.className === 'img__btn-excluir';
    if (ehBotaoDeletar) {
      const linhaNovoProduto = evento.target.closest('[data-id]');
      let id = linhaNovoProduto.dataset.id;
      if (confirm("Tem certeza que deseja excluir este produto?")) {
        await produtoService.removeProduto(id);
      } else {
        console.log("Exclusão cancelada pelo usuário");
      }
    }
});

produtoService.listaProduto() /*itera e exibe dados na tela que foram coletados pela fetch*/
.then(data => {
    data.forEach(elemento => {
        sessao.appendChild(criaNovaDivProduto(elemento.imagem, elemento.nome, elemento.preco, elemento.id))
})})