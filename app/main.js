let livros = [];
const ApiUrl = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaApi()

async function getBuscarLivrosDaApi(){
    const res = await fetch(ApiUrl)
    livros = await res.json()
    const livrosComDesconto = aplicarDesconto(livros);
    console.table(livrosComDesconto);

    Criarlivros(livrosComDesconto)
}


    
