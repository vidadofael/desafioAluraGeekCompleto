const listaProduto = () => {
    return fetch(`http://localhost:4000/produtos`)
    .then(resposta => {
        return resposta.json()
    })
    /*const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest()

        http.open('GET', 'http://localhost:4000/produtos')
    
        http.onload = () => {
           if(http.status >= 400){
                reject(JSON.parse(http.response))
           }else {
                resolve(JSON.parse(http.response))
           }
        } 
        http.send()  
    })
    return promise*/
}

/*'POST*/
const criaProduto = (imagem, nome, preco) => {
    return fetch(`http://localhost:4000/produtos`, {
        method:'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            imagem: imagem,
            nome: nome,
            preco: preco
        })

    })
    .then(resposta => {
        return resposta.body
    })
}

const removeProduto = (id) => {
    return fetch(`http://localhost:4000/produtos/${id}`, {
        method: 'DELETE'
    })
}

const detalhaProduto = (id) => {
    return fetch(`http://localhost:4000/produtos/${id}`)
    .then(resposta => {
        return resposta.json()
    })
}

const atualizaProduto = (id, imagem, nome, preco) => {
    return fetch(`http://localhost:4000/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            imagem: imagem,
            nome: nome,
            preco: preco
        })
    })
    .then(resposta => {
        return resposta.json()
    })
}

export const produtoService = {
    listaProduto,
    criaProduto,
    removeProduto,
    detalhaProduto,
    atualizaProduto
}
/* produtoService.listaProduto */
/* produtoService.criaProduto */
/* produtoService.removeProduto */
/* produtoService.detalhaProduto */
/* produtoService.atualizaProduto */