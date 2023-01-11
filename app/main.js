let livros = [];
const ApiUrl = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaApi()

async function getBuscarLivrosDaApi(){
    const res = await fetch(ApiUrl)
    livros = await res.json()
    console.table(livros)

    Criarlivros(livros)
}

function Criarlivros(livros){
    const DivPrincipal = document.createElement('div')
    DivPrincipal.classList.add('livro')

    const ImagemCard = document.createElement('img')
    ImagemCard.setAttribute('src' `${livros.imagem}`)
    console.log(DivPrincipal)
}