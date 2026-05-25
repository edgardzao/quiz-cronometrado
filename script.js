/* 
=========================================
PROVA 2 - QUIZ CRONOMETRADO
Disciplina: Ferramenta de Desenvolvimento Web
Faculdade: Fatec Americana - 4° Semestre

Nomes:
Edgard Petri - RA: 0040962423041
Thiago Andre da Silva - RA: 0040962423022
=========================================
*/

/* ===================================== */
/* CONFIGURAÇÕES */
/* ===================================== */

const temaSelect =
    document.getElementById("tema");

const dificuldadeSelect =
    document.getElementById("dificuldade");

const volumeRange =
    document.getElementById("volume");

const salvarConfig =
    document.getElementById("Salvar-Config");

/* ================================= */
/* ÁUDIOS */
/* ================================= */

const musicaFundo =
    document.getElementById(
        "MusicaFundo"
    );

const somAcerto =
    document.getElementById(
        "SomAcerto"
    );

const somErro =
    document.getElementById(
        "SomErro"
    );

const somClique =
    document.getElementById(
        "SomClique"
    );




/* ===================================== */
/* CARREGAR CONFIGURAÇÕES */
/* ===================================== */

window.onload = () => {

    let temaSalvo =
        localStorage.getItem("tema");

    let dificuldadeSalva =
        localStorage.getItem("dificuldade");

    let volumeSalvo =
        localStorage.getItem("volume");

    /* TEMA */

    if (temaSalvo) {

        document.body.className =
            temaSalvo;

        if (temaSelect) {

            temaSelect.value =
                temaSalvo;
        }
    }

    /* DIFICULDADE */

    if (dificuldadeSalva) {

        if (dificuldadeSelect) {

            dificuldadeSelect.value =
                dificuldadeSalva;
        }
    }

    /* VOLUME */

    if (volumeSalvo) {

        if (volumeRange) {

            volumeRange.value =
                volumeSalvo;
                                   
        }

        if (musicaFundo) {

            musicaFundo.volume =
                volumeSalvo / 100;
        }

        if (somAcerto) {

            somAcerto.volume =
                volumeSalvo / 100;
        }

        if (somErro) {
            somErro.volume =  
                volumeSalvo / 100;
        }
    }
};


/* ===================================== 
         TOCAR MÚSICA DE FUNDO 
   ===================================== */

if (musicaFundo) {

    musicaFundo.volume = 0.3;

    musicaFundo.play();
}

/* ===================================== */
/* TROCAR TEMA */
/* ===================================== */

if (temaSelect) {

    temaSelect.addEventListener(

        "change",

        () => {

            document.body.className =
                temaSelect.value;
        }
    );
}

/* ===================================== */
/* SALVAR CONFIGURAÇÕES */
/* ===================================== */

if (salvarConfig) {

    salvarConfig.addEventListener(

        "click",

        () => {

            localStorage.setItem(
                "tema",
                temaSelect.value
            );

            localStorage.setItem(
                "dificuldade",
                dificuldadeSelect.value
            );

            localStorage.setItem(
                "volume",
                volumeRange.value
            );

            alert(
                "Configurações Salvas!"
            );
        }
    );
}

/* ===================================== */
/* ELEMENTOS JOGO */
/* ===================================== */

const perguntaTexto =
    document.getElementById("Pergunta");

const respostasDiv =
    document.getElementById("Respostas");

const pontosTexto =
    document.getElementById("Pontos");

const tempoTexto =
    document.getElementById("Tempo");

const nivelTexto =
    document.getElementById("Nivel");

const contadorTexto =
    document.getElementById("Contador");


/* ===================================== */
/* VARIÁVEIS */
/* ===================================== */

let perguntas = [];

let perguntaAtual = 0;

let pontuacao = 0;

let tempo = 30;

let cronometro;

/* ===================================== */
/* PERGUNTAS */
/* ===================================== */

const perguntasFaceis = [

    {
        pergunta: "Qual a capital do Brasil?",

        respostas: [
            "Brasília",
            "São Paulo",
            "Rio de Janeiro",
            "Salvador"
        ],

        correta: "Brasília"
    },

    {
        pergunta: "Quanto é 2 + 2?",

        respostas: [
            "2",
            "3",
            "4",
            "5"
        ],

        correta: "4"
    },

    {
        pergunta: "Qual animal late?",

        respostas: [
            "Gato",
            "Peixe",
            "Cachorro",
            "Pássaro"
        ],

        correta: "Cachorro"
    },

    {
        pergunta: "Qual cor do céu em um dia limpo?",

        respostas: [
            "Azul",
            "Verde",
            "Roxo",
            "Preto"
        ],

        correta: "Azul"
    },

    {
        pergunta: "Quantos dias tem uma semana?",

        respostas: [
            "5",
            "6",
            "7",
            "8"
        ],

        correta: "7"
    },

    {
        pergunta: "Qual fruta é amarela?",

        respostas: [
            "Banana",
            "Maçã",
            "Morango",
            "Uva"
        ],

        correta: "Banana"
    },

    {
        pergunta: "Quanto é 10 - 5?",

        respostas: [
            "2",
            "3",
            "4",
            "5"
        ],

        correta: "5"
    },

    {
        pergunta: "Qual planeta vivemos?",

        respostas: [
            "Marte",
            "Júpiter",
            "Terra",
            "Saturno"
        ],

        correta: "Terra"
    },

    {
        pergunta: "Qual estação é mais quente?",

        respostas: [
            "Inverno",
            "Verão",
            "Outono",
            "Primavera"
        ],

        correta: "Verão"
    },

    {
        pergunta: "Qual usamos para escrever?",

        respostas: [
            "Lápis",
            "Prato",
            "Copo",
            "Mesa"
        ],

        correta: "Lápis"
    },

    {
        pergunta: "Quanto é 5 x 5?",

        respostas: [
            "10",
            "15",
            "20",
            "25"
        ],

        correta: "25"
    },

    {
        pergunta: "Qual animal mia?",

        respostas: [
            "Cachorro",
            "Leão",
            "Gato",
            "Peixe"
        ],

        correta: "Gato"
    },

    {
        pergunta: "Quantos meses tem um ano?",

        respostas: [
            "10",
            "11",
            "12",
            "13"
        ],

        correta: "12"
    },

    {
        pergunta: "Qual é o oposto de frio?",

        respostas: [
            "Gelado",
            "Quente",
            "Morno",
            "Fresco"
        ],

        correta: "Quente"
    },

    {
        pergunta: "Quanto é 100 dividido por 10?",

        respostas: [
            "5",
            "10",
            "15",
            "20"
        ],

        correta: "10"
    },

    {
    
        pergunta: "Qual a o maior estado do Brasil?",

        respostas: [
            "Brasília",
            "Rio de Janeiro",
            "São Paulo",
            "Amazonas"
        ],

        correta: "Amazonas"
    },

    {
        pergunta: "Quanto é 2 x 2?",

        respostas: [
            "2",
            "3",
            "4",
            "5"
        ],

        correta: "4"
    },

    {
        pergunta: "Qual animal Nada?",

        respostas: [
            "Gato",
            "Peixe",
            "Cachorro",
            "Leão"
        ],

        correta: "Peixe"
    },

    {
        pergunta: "Qual cor do céu?",

        respostas: [
            "Azul",
            "Verde",
            "Preto",
            "Roxo"
        ],

        correta: "Azul"
    },

    {
        pergunta: "Quantos meses tem um semestre?",

        respostas: [
            "5",
            "6",
            "7",
            "8"
        ],

        correta: "6"
    }

];

const perguntasMedias = [

    {
        pergunta: "Quem descobriu o Brasil?",

        respostas: [
            "Pedro Álvares Cabral",
            "Dom Pedro I",
            "Tiradentes",
            "Getúlio Vargas"
        ],

        correta: "Pedro Álvares Cabral"
    },

    {
        pergunta: "Qual linguagem estiliza páginas web?",

        respostas: [
            "HTML",
            "Python",
            "CSS",
            "Java"
        ],

        correta: "CSS"
    },

    {
        pergunta: "Qual o maior planeta do Sistema Solar?",

        respostas: [
            "Terra",
            "Saturno",
            "Marte",
            "Júpiter"
        ],

        correta: "Júpiter"
    },

    {
        pergunta: "Quem pintou a Mona Lisa?",

        respostas: [
            "Van Gogh",
            "Leonardo da Vinci",
            "Picasso",
            "Michelangelo"
        ],

        correta: "Leonardo da Vinci"
    },

    {
        pergunta: "Quanto é 9 x 8?",

        respostas: [
            "64",
            "72",
            "81",
            "56"
        ],

        correta: "72"
    },

    {
        pergunta: "Qual navegador é da Google?",

        respostas: [
            "Firefox",
            "Safari",
            "Chrome",
            "Opera"
        ],

        correta: "Chrome"
    },

    {
        pergunta: "Qual gás respiramos?",

        respostas: [
            "Nitrogênio",
            "Oxigênio",
            "Carbono",
            "Hidrogênio"
        ],

        correta: "Oxigênio"
    },

    {
        pergunta: "Quem escreveu Dom Casmurro?",

        respostas: [
            "Machado de Assis",
            "Monteiro Lobato",
            "José de Alencar",
            "Clarice Lispector"
        ],

        correta: "Machado de Assis"
    },

    {
        pergunta: "Em qual continente fica o Brasil?",

        respostas: [
            "Europa",
            "África",
            "América do Sul",
            "Ásia"
        ],

        correta: "América do Sul"
    },

    {
        pergunta: "Quanto é 15 x 3?",

        respostas: [
            "30",
            "35",
            "45",
            "50"
        ],

        correta: "45"
    },

    {
        pergunta: "Qual é o maior oceano do mundo?",

        respostas: [
            "Atlântico",
            "Pacífico",
            "Índico",
            "Ártico"
        ],

        correta: "Pacífico"
    },

    {
        pergunta: "Qual país tem formato de bota?",

        respostas: [
            "Portugal",
            "França",
            "Itália",
            "Espanha"
        ],

        correta: "Itália"
    },

    {
        pergunta: "Qual é a moeda dos Estados Unidos?",

        respostas: [
            "Euro",
            "Peso",
            "Dólar",
            "Real"
        ],

        correta: "Dólar"
    },

    {
        pergunta: "Qual instrumento mede temperatura?",

        respostas: [
            "Barômetro",
            "Termômetro",
            "Régua",
            "Bússola"
        ],

        correta: "Termômetro"
    },

    {
        pergunta: "Qual é o resultado de 144 ÷ 12?",

        respostas: [
            "10",
            "11",
            "12",
            "13"
        ],

        correta: "12"
    },

    {
        pergunta: "Qual desses animais vive na água?",

        respostas: [
            "Leão",
            "Golfinho",
            "Elefante",
            "Tigre"
        ],

        correta: "Golfinho"
    },

    {
        pergunta: "Qual planeta é conhecido como planeta vermelho?",

        respostas: [
            "Marte",
            "Saturno",
            "Netuno",
            "Vênus"
        ],

        correta: "Marte"
    },

    {
        pergunta: "Qual é o idioma oficial do Brasil?",

        respostas: [
            "Espanhol",
            "Inglês",
            "Português",
            "Francês"
        ],

        correta: "Português"
    },

    {
        pergunta: "Qual desses é um sistema operacional?",

        respostas: [
            "Windows",
            "Google",
            "YouTube",
            "Instagram"
        ],

        correta: "Windows"
    },

    {
        pergunta: "Quantos lados possui um hexágono?",

        respostas: [
            "5",
            "6",
            "7",
            "8"
        ],

        correta: "6"
    },

    {
        pergunta: "Quem descobriu a América?",

        respostas: [
            "Cristóvão Colombo",
            "Dom Pedro",
            "Tiradentes",
            "Lula"
        ],

        correta: "Cristóvão Colombo"
    },

    {
        pergunta: "Qual linguagem é a base de um site?",

        respostas: [
            "CSS",
            "HTML",
            "Python",
            "Java"
        ],

        correta: "HTML"
    },

    {
        pergunta: "Quanto é 10 x 10?",

        respostas: [
            "100",
            "81",
            "64",
            "56"
        ],

        correta: "100"
    },

    {
        pergunta: "Maior planeta?",

        respostas: [
            "Júpiter",
            "Terra",
            "Marte",
            "Saturno"
        ],

        correta: "Júpiter"
    },

    {
        pergunta: "Quem pintou Mona Lisa?",

        respostas: [
            "Da Vinci",
            "Picasso",
            "Van Gogh",
            "Michelangelo"
        ],

        correta: "Da Vinci"
    }

];

const perguntasDificeis = [

    {
        pergunta: "Qual o símbolo químico do Ouro?",

        respostas: [
            "Ag",
            "Au",
            "O",
            "Go"
        ],

        correta: "Au"
    },

    {
        pergunta: "Em que ano ocorreu a Revolução Francesa?",

        respostas: [
            "1492",
            "1789",
            "1822",
            "1914"
        ],

        correta: "1789"
    },

    {
        pergunta: "Quem criou a Teoria da Relatividade?",

        respostas: [
            "Newton",
            "Tesla",
            "Einstein",
            "Galileu"
        ],

        correta: "Einstein"
    },

    {
        pergunta: "Qual a raiz quadrada de 169?",

        respostas: [
            "11",
            "12",
            "13",
            "14"
        ],

        correta: "13"
    },

    {
        pergunta: "Qual o país mais populoso do mundo em 2026?",

        respostas: [
            "China",
            "Brasil",
            "Índia",
            "Estados Unidos"
        ],

        correta: "Índia"
    },

    {
        pergunta: "Quem inventou o telefone?",

        respostas: [
            "Thomas Edison",
            "Nikola Tesla",
            "Alexander Graham Bell",
            "Newton"
        ],

        correta: "Alexander Graham Bell"
    },

    {
        pergunta: "Qual a capital da Austrália?",

        respostas: [
            "Sydney",
            "Melbourne",
            "Canberra",
            "Perth"
        ],

        correta: "Canberra"
    },

    {
        pergunta: "Quanto é 25²?",

        respostas: [
            "525",
            "625",
            "725",
            "225"
        ],

        correta: "625"
    },

    {
        pergunta: "Qual o maior oceano do planeta?",

        respostas: [
            "Atlântico",
            "Índico",
            "Pacífico",
            "Ártico"
        ],

        correta: "Pacífico"
    },

    {
        pergunta: "Qual a velocidade aproximada da luz?",

        respostas: [
            "150 mil km/s",
            "300 mil km/s",
            "1 milhão km/s",
            "50 mil km/s"
        ],

        correta: "300 mil km/s"
    },

    {
        pergunta: "Qual cientista formulou as leis da gravidade?",

        respostas: [
            "Galileu",
            "Einstein",
            "Newton",
            "Tesla"
        ],

        correta: "Newton"
    },

    {
        pergunta: "Qual é o maior deserto do mundo?",

        respostas: [
            "Saara",
            "Antártida",
            "Atacama",
            "Kalahari"
        ],

        correta: "Antártida"
    },

    {
        pergunta: "Quantos elementos possui a tabela periódica atualmente?",

        respostas: [
            "108",
            "112",
            "118",
            "120"
        ],

        correta: "118"
    },

    {
        pergunta: "Qual país sediou a Copa do Mundo de 2014?",

        respostas: [
            "Alemanha",
            "Brasil",
            "Rússia",
            "África do Sul"
        ],

        correta: "Brasil"
    },

    {
        pergunta: "Qual o menor país do mundo?",

        respostas: [
            "Mônaco",
            "Malta",
            "Vaticano",
            "Luxemburgo"
        ],

        correta: "Vaticano"
    },

    {
        pergunta: "Qual o nome do processo das plantas produzirem alimento?",

        respostas: [
            "Respiração",
            "Fotossíntese",
            "Digestão",
            "Fermentação"
        ],

        correta: "Fotossíntese"
    },

    {
        pergunta: "Quem escreveu 'A Divina Comédia'?",

        respostas: [
            "Dante Alighieri",
            "Shakespeare",
            "Machado de Assis",
            "Homero"
        ],

        correta: "Dante Alighieri"
    },

    {
        pergunta: "Qual é o resultado de 15³?",

        respostas: [
            "2250",
            "3375",
            "1250",
            "3150"
        ],

        correta: "3375"
    },

    {
        pergunta: "Qual metal é líquido em temperatura ambiente?",

        respostas: [
            "Mercúrio",
            "Ferro",
            "Prata",
            "Alumínio"
        ],

        correta: "Mercúrio"
    },

    {
        pergunta: "Qual linguagem é usada para estruturar páginas web?",

        respostas: [
            "CSS",
            "Python",
            "HTML",
            "Java"
        ],

        correta: "HTML"
    },

    {
        pergunta: "Qual símbolo do Ferro?",

        respostas: [
            "Fe",
            "Fr",
            "Fo",
            "F"
        ],

        correta: "Fe"
    },

    {
        pergunta: "Quem criou a Relatividade?",

        respostas: [
            "Einstein",
            "Newton",
            "Tesla",
            "Galileu"
        ],

        correta: "Einstein"
    },

    {
        pergunta: "Raiz quadrada de 144?",

        respostas: [
            "12",
            "10",
            "11",
            "13"
        ],

        correta: "12"
    },

    {
        pergunta: "Qual o menor oceano?",

        respostas: [
            "Pacífico",
            "Atlântico",
            "Índico",
            "Ártico"
        ],

        correta: "Ártico"
    },

    {
        pergunta: "Quanto é 50 x 50?",

        respostas: [
            "625",
            "525",
            "2510",
            "2500"
        ],

        correta: "2500"
    }

];

/* ===================================== */
/* INICIAR QUIZ */
/* ===================================== */

function iniciarQuiz() {

    let dificuldade =

        localStorage.getItem(
            "dificuldade"
        );

    /* FÁCIL */

    if (dificuldade == "facil") {

        perguntas =
            perguntasFaceis;
    }

    /* MÉDIO */

    else if (dificuldade == "medio") {

        perguntas =
            perguntasMedias;
    }

    /* DIFÍCIL */

    else {

        perguntas =
            perguntasDificeis;
    }

    /* EMBARALHAR */

    perguntas.sort(
        () => Math.random() - 0.5
    );

    /* Quantidade de perguntas */

    let quantidade = 10;


    perguntas = perguntas.slice(0, quantidade); 

    carregarPergunta();
}

/* ===================================== */
/* CARREGAR PERGUNTA */
/* ===================================== */

function carregarPergunta() {

    limparCronometro();

    tempo = 30;

    atualizarTempo();

    iniciarCronometro();

    const perguntaObj =
        perguntas[perguntaAtual];

    /* TEXTO */

    perguntaTexto.innerText =
        perguntaObj.pergunta;

    /* CONTADOR */

    contadorTexto.innerText =
        `${perguntaAtual + 1}/${perguntas.length}`;

    /* PONTOS */

    pontosTexto.innerText =
        pontuacao;

    /* NÍVEL */

    nivelTexto.innerText =
        localStorage.getItem(
            "dificuldade"
        );

    /* LIMPAR */

    respostasDiv.innerHTML = "";

    /* CRIAR BOTÕES */

    perguntaObj.respostas.forEach(

        resposta => {

            const botao =
                document.createElement(
                    "button"
                );

            botao.innerText =
                resposta;

            botao.onclick = () => {
                
                somClique.play();

                verificarResposta(
                    resposta
                );
            };

            respostasDiv.appendChild(
                botao
            );
        }
    );
}

/* ===================================== */
/* VERIFICAR */
/* ===================================== */

function verificarResposta(resposta) {

    const correta =
        perguntas[perguntaAtual]
            .correta;

    /* ACERTO */

    if (resposta == correta) {

        somAcerto.play();

        pontuacao += 10;
    }

    /* ERRO */

    else {

        somErro.play();

        pontuacao -= 5;

        
    }

    perguntaAtual++;

    /* FINAL */

    if (perguntaAtual >= perguntas.length) {

        finalizarQuiz();
    }

    else {

        carregarPergunta();
    }
}

/* ===================================== */
/* FINALIZAR QUIZ */
/* ===================================== */

function finalizarQuiz() {

    limparCronometro();

    /* SALVAR RANKING */

    let nomeJogador =

        localStorage.getItem(
            "nomeJogador"
        ) || "Jogador";

    let ranking =

        JSON.parse(

            localStorage.getItem(
                "ranking"
            )

        ) || [];

    let JogadorExistente = ranking.find(

        jogador => jogador.nome === nomeJogador

    );

    if (!JogadorExistente) {

        ranking.push({

        nome: nomeJogador,

            pontos: pontuacao
        });
    }

    ranking.sort(

        (a, b) =>

            b.pontos - a.pontos
    );

    localStorage.setItem(

        "ranking",

        JSON.stringify(ranking)
    );

    /* ESCONDER */

    document.querySelector(
        ".Pergunta-Box"
    ).style.display = "none";

    respostasDiv.style.display =
        "none";

    /* RESULTADO */

    const resultado =
        document.getElementById(
            "ResultadoFinal"
        );

    /* VITÓRIA */

    if (pontuacao >= 50) {

        resultado.innerHTML =

            `
        <div class="Tela-Final">

            <h1 class="Vitoria">

                VOCÊ GANHOU!

            </h1>

            <h2>

                Pontuação:
                ${pontuacao}

            </h2>

            <div class="Botoes-Finais">

                <button
                class="Start-Button"  onclick="reiniciarJogo()">
                   JOGAR NOVAMENTE
                </button>
                <button class="Classif-Button" onclick="window.location.href='Classificacao.html'">
                    RANKING
                </button>
                <button
                class="Fechar-Button"
                onclick="window.location.href='Inicio.html'">

                    FECHAR

                </button>

            </div>

        </div>
        `;
    }

    /* DERROTA */

    else {

        resultado.innerHTML =

            `
        <div class="Tela-Final">

            <h1 class="Derrota">

                VOCÊ PERDEU!

            </h1>

            <h2>

                Pontuação:
                ${pontuacao}

            </h2>

            <div class="Botoes-Finais">

                <button
                class="Start-Button"
                onclick="reiniciarJogo()">

                    JOGAR NOVAMENTE

                </button>

                <button class="Classif-Button" onclick="window.location.href='Classificacao.html'">

                    Ranking

                </button>

                <button
                class="Fechar-Button"
                onclick="window.location.href='Inicio.html'">

                    FECHAR

                </button>

            </div>

        </div>
        `;
    }
}

/* ===================================== */
/* REINICIAR */
/* ===================================== */

function reiniciarJogo() {

    window.location.reload();
}

/* ===================================== */
/* CRONÔMETRO */
/* ===================================== */

function iniciarCronometro() {

    cronometro = setInterval(

        () => {

            tempo--;

            atualizarTempo();

            if (tempo <= 0) {

                perguntaAtual++;

                if (perguntaAtual >=
                    perguntas.length) {

                    finalizarQuiz();
                }

                else {

                    carregarPergunta();
                }
            }

        },

        1000
    );
}

/* ===================================== */
/* LIMPAR CRONÔMETRO */
/* ===================================== */

function limparCronometro() {

    clearInterval(
        cronometro
    );
}

/* ===================================== */
/* ATUALIZAR TEMPO */
/* ===================================== */

function atualizarTempo() {

    if (tempoTexto) {

        tempoTexto.innerText =
            tempo;
    }
}

/* ===================================== */
/* RANKING */
/* ===================================== */

function carregarRanking() {

    const tabela =

        document.getElementById(
            "TabelaRanking"
        );

    if (!tabela) {

        return;
    }

    let ranking =

        JSON.parse(

            localStorage.getItem(
                "ranking"
            )

        ) || [];

    tabela.innerHTML = "";

    ranking.forEach(

        (jogador, index) => {

            tabela.innerHTML +=

                `
            <tr>

                <td>
                    ${index + 1}
                </td>

                <td>
                    ${jogador.nome}
                </td>

                <td>
                    ${jogador.pontos}
                </td>

            </tr>
            `;
        }
    );
}

/* ===================================== */
/* LIMPAR RANKING */
/* ===================================== */

function limparRanking() {

    localStorage.removeItem(
        "ranking"
    );

    carregarRanking();
}

/* ===================================== */
/* VOLTAR MENU */
/* ===================================== */

function voltarMenu() {

    window.location.href =
        "Inicio.html";
}

/* ===================================== */
/* SALVAR NOME */
/* ===================================== */

function salvarNome() {

    let nome =

        document.getElementById(
            "NomeJogador"
        ).value;

    if (nome == "") {

        alert(
            "Digite um nome!"
        );

        return;
    }

    localStorage.setItem(
        "nomeJogador",
        nome
    );

    window.location.href =
        "paginas/Inicio.html";
}

/* ===================================== */
/* INICIAR */
/* ===================================== */

if (perguntaTexto) {

    iniciarQuiz();
}

carregarRanking();