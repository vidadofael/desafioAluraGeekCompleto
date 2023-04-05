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

export const produtoService = {
    listaProduto
}
/* produtoService.listaProduto */