// ========================================
// iSee - Conexão com a TMDB
// ========================================

// ATENÇÃO:
// Não coloque sua chave diretamente neste arquivo
// se o repositório estiver público.

// Vamos deixar o campo preparado para nosso teste.
const API_KEY = "COLOQUE_SUA_API_KEY_AQUI";


// ========================================
// URL da TMDB
// ========================================

const API_URL =
    "https://api.themoviedb.org/3/movie/popular";


// ========================================
// Buscar filmes populares
// ========================================

async function buscarFilmes() {

    try {

        const resposta = await fetch(
            `${API_URL}?api_key=${API_KEY}&language=pt-BR&page=1`
        );


        // Verifica se a API respondeu corretamente

        if (!resposta.ok) {
            throw new Error("Não foi possível acessar a TMDB.");
        }


        // Transforma a resposta em JSON

        const dados = await resposta.json();


        // Mostra os dados no console

        console.log("Filmes recebidos da TMDB:");

        console.log(dados);


    } catch (erro) {

        console.error(
            "Erro ao buscar filmes:",
            erro
        );

    }

}


// ========================================
// Executar a função
// ========================================

buscarFilmes();
