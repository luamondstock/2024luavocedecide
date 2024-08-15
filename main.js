const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "texto01",
        alternativas: [
           { 
            texto:"alternativa01", 
            afirmaçao: "afirmaçao01"
           },
           { 
            texto:"alternativa02", 
            afirmaçao:"afirmaçao02"
           }
        ]

    },
    {
        enunciado: "texto02",
        alternativas:[
            { 
                texto:"alternativa03", 
                afirmaçao: "afirmaçao03"
            },
            {        
                texto:"alternativa04", 
                afirmaçao:"afirmaçao04"
            }
        ]

    },
    {
        enunciado: "texto03",
        alternativas: [
            { 
                texto:"alternativa05", 
                afirmaçao: "afirmaçao05"
               },
               { 
                texto:"alternativa06", 
                afirmaçao:"afirmaçao06"
            }
        ]

    },
    {
        enunciado: "texto04",
        alternativas: [
            { 
                texto:"alternativa07", 
                afirmaçao: "afirmaçao07"
               },
               { 
                texto:"alternativa08", 
                afirmaçao:"afirmaçao08"
            }
        ]

    },
    {
        enunciado: "texto05",
        alternativas: [
            { 
                texto:"alternativa09", 
                afirmaçao: "afirmaçao09"
               },
               { 
                texto:"alternativa10", 
                afirmaçao:"afirmaçao10"
            }
        ]

    },
    
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas()
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        })

        caixaAlternativas.appendChild(botaoAlternativas)

    }
   






