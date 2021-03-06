let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem vinda ' + info.personagem);

//-------------------------------------------

info['recorrente'] = 'Sim';

console.log(info);

//-------------------------------------------

for(let index in info){
    console.log(index);
}

//-------------------------------------------

for(let index in info){
    console.log(info[index]);
}

//-------------------------------------------

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
};

console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);
console.log('Ambos recorrentes');

//-------------------------------------------

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O filme favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + '"' + leitor.livrosFavoritos[0].titulo + '"');

leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
};

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');