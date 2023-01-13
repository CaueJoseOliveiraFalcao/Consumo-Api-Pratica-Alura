function aplicarDesconto(livros){
    const desconto = 0.3
    const livroComDesconto = livros.map(livros =>{
        return{...livros, preco: livros.preco - (livros.preco * desconto)}
    })
    return livroComDesconto
}