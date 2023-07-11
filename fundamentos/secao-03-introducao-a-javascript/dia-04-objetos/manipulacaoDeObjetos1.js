const reader = {
  name: "Julia",
  lastName: "Pessoa",
  age: 21,
  favoriteBooks: [
    {
      title: "O Senhor dos Anéis - a Sociedade do Anel",
      author: "J. R. R. Tolkien",
      publisher: "Martins Fontes",
    },
  ],
};

const name = reader.name;
const lastName = reader.lastName;
const favoriteBook = reader.favoriteBooks[0].title;

console.log(`O livro favorito de ${name} ${lastName} se chama ${favoriteBook}`);

reader.favoriteBooks[1] = {
  title: "Harry Potter e o Prisioneiro de Azkaban",
  author: "JK Rowling",
  publisher: "Rocco",
};

const numberOfFavoriteBooks = reader.favoriteBooks.length;

console.log(`${name} tem ${numberOfFavoriteBooks} livros favorito`);
