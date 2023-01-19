const Butoes = document.querySelectorAll('.btn')

Butoes.forEach(element => {
    
    element.addEventListener('click' , FiltrarLivros )
});
const ButaoDisponiveis = document.querySelector('#btnLivrosDisponiveis')
ButaoDisponiveis.addEventListener('click', FiltrarDisponiveis)

function FiltrarLivros(){

    const ElementoButao = document.getElementById(this.id)
    const Categoria = ElementoButao.value
    const LivrosFiltrados = livros.filter(livros => livros.categoria == Categoria)
    Criarlivros(LivrosFiltrados)
    

}

function FiltrarDisponiveis(){
    
    let LivrosCDescDisp = aplicarDesconto(livros)
    let LivrosDisponiveis = LivrosCDescDisp.filter(LivrosCDescDisp => LivrosCDescDisp.quantidade > 0)
    Criarlivros(LivrosDisponiveis)
    let SomaDosLivrosDisponiveis = 0
    LivrosDisponiveis.forEach(element => {
        SomaDosLivrosDisponiveis += element.preco
    });
    document.querySelector('#valor_total_livros_disponiveis').innerHTML = 
    `<div class="livros__disponiveis"><p>Todos os livros disponíveis por R$ <span id="valor">${SomaDosLivrosDisponiveis.toFixed(2)}</span></p></div>`
    
}

function VerificarDisponibildade(livros){
    if (livros.quantidade > 0){
        return true
    }
    else{
        return false
    }
}