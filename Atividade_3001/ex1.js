
const biblioteca = {
    livrosDisponiveis: [
        { titulo: "Harry Potter", autor: "J.K. Rowling", disponivel: true },
        { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: true },
    ],
    alunosMatriculados: [
        { nome: "João", turma: "A", matriculado: true },
        { nome: "Maria", turma: "B", matriculado: true },
    ],
    realizarEmprestimo: function (livroIndex, alunoIndex) {
        if (this.livrosDisponiveis[livroIndex] && this.alunosMatriculados[alunoIndex]) {
            if (this.livrosDisponiveis[livroIndex].disponivel && this.alunosMatriculados[alunoIndex].matriculado) {
                this.livrosDisponiveis[livroIndex].disponivel = false;
                return `Empréstimo realizado para ${this.alunosMatriculados[alunoIndex].nome}.`;
            } else {
                return "Livro não disponível ou aluno não matriculado.";
            }
        } else {
            return "Índices de livro ou aluno inválidos.";
        }
    },
};


console.log(biblioteca.realizarEmprestimo(0, 1)); 
