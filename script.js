const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Hoje em dia a tecnologia nos campos vão almentando cada vez mais",
        alternativas: [
            {
                texto: "Isso e bom",
                afirmacao: "Ajuda a facilitar a vida do produtor agricola"
            },
            {
                texto: "Isso e ruim",
                afirmacao: "E ruim por que a tecnologia tira empregos de pessoas"
            }
        ]
    },
    {
        enunciado: "Como a tecnologia está mudando o campo a sua professora quis fazer um debate com a sua sala de aula apresentando os pros e contras do aumento da tecnologia no campo qual lado você se posiciona ",
        alternativas: [
            {
                texto: "A favor das tecnologias no campo para facilitar os plantios",
                afirmacao: "As tecnologias facilitam muito em safras pois com dorne, GPS por satelites fica mas facil o plantil, passar os peticidas e a colheita"
            },
            {
                texto: "Contra pois a tecnologia requer ter cursos para poder utilizar",
                afirmacao: "É ruim pois as tecnologias tiram o emprego de pessoas ou por não saber utilizar essas novas tecnologias ou por que as maquinas fazem o trabalho do homen assim não precisando pagar mas a mão de obra "
            }
        ]
    },
    {
        enunciado: "Cada vez mas o mundo está ficandomas moderno com novas tecnologia sendo criadas a todo tempo principalmente no campo modernizando maquinarios agriculas e até as sementes, com isso em aumentando cada vez mais no campo esta atraindo jovens para o campo. Vocễ acha isso bom ou não",
        alternativas: [
            {
                texto: "muito bom",
                afirmacao: "Cada vez mais o campo está se modernizando e assim facilitar a vida dos agricultores "
            },
            {
                texto: "bem ruim",
                afirmacao: "Pois os jovens tiram o emprego das pessoas mais velhas por saber mexer nas tecnologias"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
