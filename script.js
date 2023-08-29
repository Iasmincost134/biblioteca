let biblioteca = [];
    
function cadastro(nome, autor, ano) {
    var livro = {
        titulo: nome,
        autor: autor,
        ano: ano
    };
    biblioteca.push(livro);
}

function apagar() {
    biblioteca.length = 0;
    exibirMensagem();
}

function verificarCamposVazios() {
    let nome = document.getElementById('nomeLivro').value;
    let autor = document.getElementById('autorLivro').value;
    let ano = document.getElementById('anoLivro').value;
    let mensagem = document.getElementById('mensagem');

    if (nome === "" || autor === "" || ano === "") {
        mensagem.textContent = "Cadastre um livro";
        return false;
    }

    mensagem.textContent = "";
}

function adicionar() {
    let nome = document.getElementById('nomeLivro').value;
    let autor = document.getElementById('autorLivro').value;
    let ano = document.getElementById('anoLivro').value;
    cadastro(nome, autor, ano);
    exibirMensagem();

    ++imgIndice;
    carregar();
}
// function mostrarLivros() {
//     console.log(`resultado:${biblioteca[0].titulo}`);
//     const resultElement = document.getElementById("mensagem");
// }
function mostrarLivros() {
    for (let x of biblioteca) {
        console.log(x.titulo, x.autor, x.ano);
    }
    let quantidadeLivros = biblioteca.length;
    console.log("Total de livros cadastrados: " + quantidadeLivros);
    exibirMensagem();
} 

function exibirMensagem(){
    let mensagem = document.getElementById('mensagem');
    if (biblioteca.length == 0) {
        mensagem.textContent = "Cadastre um livro";
    }
    else {
        mensagem.textContent = biblioteca.length + " livros cadastrados";
    }
}

let imgIndice = 0;
const IMAGENS = ['image1.png', 'image2.png', 'image3.png', 'image4.png', 'image5.png', 'image6.png']; 
const prevButton = document.getElementById('anterior');
const nextButton = document.getElementById('proximo');

var IMG = document.getElementById('carrosselImagem');

function carregar() {
    if (imgIndice < 0) {
        imgIndice = IMAGENS.length - 1;
    }
    else if (imgIndice >= IMAGENS.length) {
        imgIndice = 0;
    }
    IMG.src = IMAGENS[imgIndice];
}

prevButton.addEventListener('click', () => {
    --imgIndice;
    carregar();
});

nextButton.addEventListener('click', () => {
    ++imgIndice;
    carregar();
});

carregar();