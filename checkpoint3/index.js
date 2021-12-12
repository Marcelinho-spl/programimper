// Micro desafio - Passo 1

// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de falta(number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

function Aluno(nome, qtdFaltas, notas){
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;

// Micro desafio - Passo 2

// Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

    this.calcularMedia = function(){
        let soma = 0;
        for(let i=0; i<this.notas.length; i++){
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    },

    this.faltas = function() {
        this.qtdFaltas += 1;
    };

}

// Micro desafio - Passo 3

// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma  de estudantes lista(um array composto pelos alunos criados no passo 1).

// Lista de Alunos...

const aluno1 = new Aluno("Marcelo", 4, [9, 8, 10, 9]);
const aluno2 = new Aluno("Mia Khalifa", 2, [6, 9, 5, 7]);
const aluno3 = new Aluno("Ambrosino", 2, [3, 6, 2, 7]);
const aluno4 = new Aluno("Jertrudes", 1, [10, 10, 10, 10]);

// Objeto Literal Curso...

let curso = {
    nomeCurso: "Programação Imperativa",
    notaAprovacao: 6,
    faltasMaximas: 5,
    estudantes: [aluno1, aluno2, aluno3, aluno4],

// Micro desafio - Passo 4

// Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

// Novo Aluno...

    novoAluno: function(aluno) {
        this.estudantes.push(aluno);
    },

// Micro desafio - Passo 5

// Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
    aprovacao: function(verificarAluno) {
        let media = verificarAluno.calcularMedia();
        let resultado = (verificarAluno.nome + ', tem a nota: ' + media + ' e foi reprovado');
        if ((verificarAluno.qtdFaltas < this.faltasMaximas && media >= this.notaAprovacao) || (verificarAluno.qtdFaltas == this.faltasMaximas && media > (this.notaAprovacao * 1.1))) {
            resultado = (verificarAluno.nome + ', tem a nota: ' + media + ' e foi aprovado');
        }
        return resultado;
    },

    validarAlunos: function() {
        let validarAprovados = [];
        for(let i = 0; i<this.estudantes.length; i++) {
            validarAprovados.push(this.aprovacao(this.estudantes[i]));
        }
        return validarAprovados;
    }

}

// Micro desafio - Passo 6

// Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.

console.log(curso.aprovacao(aluno1))
console.log(curso.aprovacao(aluno2))
console.log(curso.aprovacao(aluno3))
console.log(curso.aprovacao(aluno4))

console.log(curso.validarAlunos())








