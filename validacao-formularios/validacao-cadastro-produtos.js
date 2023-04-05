window.addEventListener('load', () => {
    const formCadastro = document.querySelector('.form__cadastro');
    const urlInput = document.querySelector('input[name="url"]');
    const nomeInput = document.querySelector('input[name="nome"]');
    const precoInput = document.querySelector('input[name="preco"]');
  
    formCadastro.addEventListener('submit', (event) => {
      event.preventDefault();
  
      if (!isUrlValid(urlInput.value)) {
        showErrorMessage(urlInput, 'Insira uma URL válida');
        return;
      }
  
      if (!isNomeValid(nomeInput.value)) {
        showErrorMessage(nomeInput, 'Insira um nome de produto válido');
        return;
      }
  
      if (!isPrecoValid(precoInput.value)) {
        showErrorMessage(precoInput, 'Insira um valor válido ex: 1.99');
        return;
      }     
    });
  
    function isUrlValid(url) {
      const urlRegex = /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
      return urlRegex.test(url);
    }
  
    function isNomeValid(nome) {
        const nomeTrimmed = nome.trim();
        const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{3,50}$/;
        return nomeTrimmed !== '' && nomeRegex.test(nomeTrimmed);
      }
  
    function isPrecoValid(preco) {
      const precoRegex = /^\d+(\.\d{1,2})?$/;
      return precoRegex.test(preco);
    }
  
    function showErrorMessage(input, message) {
      const errorMessage = document.createElement('span');
      errorMessage.classList.add('error-message');
      errorMessage.textContent = message;
      input.classList.add('input-error');
      input.parentNode.appendChild(errorMessage);
    }
  });
  