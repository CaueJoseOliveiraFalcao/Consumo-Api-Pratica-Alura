const FiltroFront = document.querySelector('#btnFiltrarLivrosFront');
const FiltroBack = document.querySelector('#btnFiltrarLivrosBack');
const FiltroDados = document.querySelector('#btnFiltrarLivrosDados');
const FiltroDisponivel = document.querySelector('#btnLivrosDisponiveis');
const FiltroPreco = document.querySelector('#btnOrdenarPorPreco');

FiltroFront.addEventListener('click' , FiltrarLivrosFront)

function FiltrarLivrosFront(){
    const LivrosFiltrados = livros.filter(livros => livros.categoria == 'front-end')
    LivrosFiltrados.forEach(element => {
        console.log(element)
        var elemento = document.querySelector('.RemovedorDeLivros')
        elemento.parentNode.removeChild(elemento)
    });

}