const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você é um jovem de 16 anos que teve oportunidade de estudar o idioma de inglês ainda na adolescência. Vê uma vaga para aprendiz em hotelaria, você aceita?",
        alternativas: [
            {
                texto:"Sim, é uma chance de eu aprender coisas novas. ",
                afirmacao: "Você mesmo novo já se encontra conseguindo comprar o que sempre quis com seu próprio dinheiro e ainda está treinando seu inglês"
            },
            {
                texto:"Não, quero focar nos meus estudos e não trabalhar no momento.",
                afirmacao: "Você preferiu estudar e não se preocupar em trabalhar por enquanto."
            }   
        ]
    },
    {
        enunciado: "Aos 18 anos, com o certificado de Inglês nas mãos, você tem que decidir entre:",
        alternativas: [
            {
                texto: "Esperar alguns meses para viajar para o exterior e estar mais preparado financeiramente.",
                afirmacao: "Você é uma pessoa com pés no chão, e preferiu esperar mais alguns meses para se arriscar num novo país."
            },
            {
                texto: "Fazer um intercâmbio com ajuda remunerada de sua familia para o seu inicio no novo país.",
                afirmacao: "Maravilha, mesmo ainda sendo novo escolheu se desafiar e se tornar ainda mais fluente."
            }
        ]
    },
    {
        enunciado: "Um ano depois você se encontra feliz com sua mudança no novo país. Você trabalha como garçom, para se sustentar, e com o seu esforço conseguiu conquistar suas coisinhas.  Agora mais oportunidades surgiram,e você terá que escolher entre: ",
        alternativas: [
            {
                texto: "Ser estágiario numa multinacional, porém com um salário não tão bom.",
                afirmacao: "Você quis se arriscar num local novo e vê um futuro brilhante na empresa."
            },
            {
                texto: "Continuar sendo garçom, pois o salário é melhor e você não passará tanta necessidade para se sustentar.",
                afirmacao: "Continuou sendo garçom pois o salário é melhor do que o de estágiario."
            }
        ]
    },
    {
        enunciado: "Você está no seu local de trabalho e conhece a mulher dos seus sonhos.",
        alternativas: [
            {
                texto: "Você puxa conversa com ela, chamando ela para sair.",
                afirmacao: "Conheceu uma americana linda e sua conexão com sua parceira flui naturalmente e vocês entram em um relacionamento sério."
            },
            {
                texto: "Você não demonstra interesse por ela pois não quer relacionamento por enquanto.",
                afirmacao: "Você segue sua vida solteiro porém sem um grande próposito."
            }
        ]
    },
    {
        enunciado: "Então você resolve voltar para o Brasil e...  ",
        alternativas: [
            {
                texto: "Decide fundar uma escola de inglês, para ensinar da sua forma como aprender um novo idioma.",
                afirmacao: "Você voltou para o brasil para reencontrar sua familia e velhos amigos. Todo o tempo que você ficou no exterior serviu de aprendizado. Você ficou tão feliz que criou uma escola de inglês com um método que aprendeu nos EUA. E se tornou uma pessoa bem sucedida."
            },
            {
                texto: "Você quer uma vida mais simples, então resolve se casar com sua namorada americana.",
                afirmacao: "Você voltou para o brasil para reencontrar sua familia e velhos amigos. Casou-se com a americana que conheceu no exterior e decidiram morar no Brasil por um tempo. "
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas(){
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "";
    atual++;
    mostrarPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = " Estes foram os resultados de suas escolhas:"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();
