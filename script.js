const filmes = [
{
titulo: "Interestelar",
ano: 2014,
nota: 8.7,
imagem: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
},
{
titulo: "O Senhor dos Anéis",
ano: 2001,
nota: 8.9,
imagem: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkbl8c6qK.jpg"
},
{
titulo: "Homem-Aranha",
ano: 2002,
nota: 7.4,
imagem: "https://image.tmdb.org/t/p/w500/gh4cZbhZxyTbgxQPxD0dOud0zH.jpg"
}
];

const container = document.getElementById("movies-container");

filmes.forEach(function(filme) {

```
const card = document.createElement("div");

card.classList.add("movie-card");

card.innerHTML = `
    <div class="movie-cover">
        <img
            src="${filme.imagem}"
            alt="Pôster de ${filme.titulo}"
            onerror="this.style.display='none'"
        >
    </div>

    <h3>${filme.titulo}</h3>

    <p>${filme.ano}</p>

    <span>⭐ ${filme.nota}</span>
`;

container.appendChild(card);
```

});
