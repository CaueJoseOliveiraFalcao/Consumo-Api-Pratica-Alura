function Criarlivros(livros){
    livros.forEach(element => {
    const DivPrincipal = document.createElement('div')
    DivPrincipal.classList.add('livro')
    DivPrincipal.classList.add('RemovedorDeLivros')

    const ImagemCard = document.createElement('img')
    ImagemCard.classList.add('livro__imagens')
    ImagemCard.src = element.imagem
    DivPrincipal.appendChild(ImagemCard)

    const TituloCard = document.createElement('h2')
    TituloCard.classList.add('livro__titulo')
    TituloCard.innerHTML = element.titulo
    DivPrincipal.appendChild(TituloCard)

    const DescricaoCard = document.createElement('p')
    DescricaoCard.classList.add('livro__descricao')
    DescricaoCard.innerHTML = element.autor
    DivPrincipal.appendChild(DescricaoCard)

    const PrecoCard = document.createElement('p')
    PrecoCard.classList.add('livro__preco')
    PrecoCard.innerHTML = element.preco.toFixed(2)
    DivPrincipal.appendChild(PrecoCard)

    const Divtags = document.createElement('div')
    Divtags.classList.add('tags')
    DivPrincipal.appendChild(Divtags)

    const TagsCard = document.createElement('span')
    TagsCard.classList.add('tag')
    TagsCard.innerHTML = element.categoria
    Divtags.appendChild(TagsCard)


    document.querySelector('#livros').appendChild(DivPrincipal)
    });
}