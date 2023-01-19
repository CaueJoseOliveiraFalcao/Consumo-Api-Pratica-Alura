let ButaoOrdernar  = document.getElementById('btnOrdenarPorPreco')
ButaoOrdernar.addEventListener('click' , OrdernarPrecos)

function OrdernarPrecos(){
    let LivrosComDescontoOrdenar = aplicarDesconto(livros)
    let livrosOrdernados = LivrosComDescontoOrdenar.sort((a,b) => a.preco - b.preco)
    Criarlivros(livrosOrdernados)
}