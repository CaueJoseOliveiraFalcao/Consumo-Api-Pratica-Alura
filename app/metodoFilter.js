const Butoes = document.querySelectorAll('.btn')

Butoes.forEach(element => {
    element.addEventListener('click' , FiltrarLivros )
});

function FiltrarLivros(){

    const ElementoButao = document.getElementById(this.id)
    const Categoria = ElementoButao.value
    if (ElementoButao.id == 'btnOrdenarPorPreco'){
        OrdernarPreco()
        return
    }
    const LivrosFiltrados = livros.filter(livros => livros.categoria == Categoria)
    Criarlivros(LivrosFiltrados)
    

}