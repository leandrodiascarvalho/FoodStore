const botoesAdicionar = document.querySelectorAll('.adicionar-carrinho');

botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
    });
});