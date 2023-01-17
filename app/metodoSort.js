var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return b - a;
});
console.log(numbers);


function OrdernarPreco(){
    const livrosComDesconto = aplicarDesconto(livros);
    livrosComDesconto.forEach(element => {
        livrosComDesconto.element.preco.sort( (a,b) => {
            return b - a 
        })

    });
    console.table(livrosComDesconto)
}