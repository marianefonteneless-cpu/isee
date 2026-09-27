// ========================================
// iSee - Filmes
// ========================================


// ========================================
// LISTA DE FILMES
// ========================================

const filmes = [

    {
        titulo: "Interestelar",
        ano: 2014,
        nota: 8.7
    },


    {
        titulo: "O Senhor dos Anéis",
        ano: 2001,
        nota: 8.9
    },


    {
        titulo: "Homem-Aranha",
        ano: 2002,
        nota: 7.4
    }

];



// ========================================
// ENCONTRAR O LOCAL DOS CARDS
// ========================================

const container = document.getElementById("movies-container");



// ========================================
// CRIAR OS CARDS
// ========================================

filmes.forEach(function(filme) {


    // Criar uma nova div

    const card = document.createElement("div");


    // Adicionar a classe movie-card

    card.classList.add("movie-card");


    // Conteúdo do card

    card.innerHTML = `

        <div class="movie-cover">

            🎬

        </div>


        <h3>

            ${filme.titulo}

        </h3>


        <p>

            ${filme.ano}

        </p>


        <span>

            ⭐ ${filme.nota}

        </span>

    `;


    // Colocar o card dentro da página

    container.appendChild(card);

});
