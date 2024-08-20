const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você começa um novo projeto de vida, o que você gosta de fazer pra poder melhorar cada fez mais",
        alternativas: [
            {
                texto: "Gosto de planejar detalhadamente antes de começar a por em pratica.",
                afirmacao: "<b>Organização</b> é uma característica forte sua, valorizando o planejamento detalhado."
            },
            {
                texto: "Prefiro começar a pensar como vou fazer logo e ajustar o plano conforme avanço.",
                afirmacao: "Você se destaca pela <b>dinamismo</b>, gostando de aprender e ajustar durante o processo."
            }
        ]
    },
    {
        enunciado: "Como você lida com problemas ou atrasos em sua rotina que é nescessaria?",
        alternativas: [
            {
                texto: "Gosto de resolver os problemas e tentar nao me atrasar mais para dar tempo de fazer tudo que preciso.",
                afirmacao: "Independência define sua abordagem para resolver problemas, confiando nas suas <b>habilidades</b>."
            },
            {
                texto: "Prefiro pedir ajuda para pessoas, para elas não deixar eu me atrasar ou me ajudar a fazer tudo na hora sem deixar para depois.",
                afirmacao: "Colaboração é essencial para você, apreciando a <b>troca de conhecimento</b> com outros colegas."
            }
        ]
    },
    {
        enunciado: "Qual é a sua prefêrencia por esportes para sua saude fisica ?",
        alternativas: [
            {
                texto: "Acredito que a funcionalidade do esporte é melhor do que os beneficios.",
                afirmacao: "<b>volei</b> é um esporte que presica de muito esforco fisico e conhecimento sobre ele."
            },
            {
                texto: "Valorizo muito a estética e gosto de criar interfaces visualmente atraentes.",
                afirmacao: "<b>futebol</b>, futebol é um esporte que precisa de mais esforço que todos os outros esportes."
            }
        ]
    },
    {
        enunciado: "Qual é o seu pensamento sobre todos os esportes para a saúde?",
        alternativas: [
            {
                texto: "Prefiro me aprofundar nas postagens e saber realmente para que serve os espertes.",
                afirmacao: "<b>Foco</b> é seu ponto forte, preferindo dominar suas ferramentas atuais."
            },
            {
                texto: "Gosto de experimentar e aprender novas tecnicas para meu funcionamento fisico",
                afirmacao: "<b>Curiosidade</b> é uma marca sua, sempre em busca de novas ferramentas e técnicas."
            }
        ]
    },
    {
        enunciado: "Como você prefere fazer algumas coisas de exercício?",
        alternativas: [
            {
                texto: "Prefiro fazer coisas no modo sozinho e mais lento ( no meu ritmo).",
                afirmacao: "<b>Independência</b> é uma preferência sua, gostando de ter controle total sobre seus projetos."
            },
            {
                texto: "Gosto de trabalhar em equipe, colaborando e compartilhando responsabilidades.",
                afirmacao: "<b>Trabalho em equipe</b> é algo que você valoriza, apreciando a colaboração e a partilha de responsabilidades."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta();
