
const escola = {
    alunos: [
        { nome: "Ana", turma: "A", matriculado: true },
        { nome: "Pedro", turma: "B", matriculado: true },
        
    ],
    professores: [
        { nome: "Prof. Silva", disciplina: "Matemática" },
        { nome: "Prof. Oliveira", disciplina: "História" },
        
    ],
    aulasMinistradas: [
        { disciplina: "Matemática", turma: "A", horario: "08:00" },
        { disciplina: "História", turma: "B", horario: "10:00" },
    
    ],
    realizarMatricula: function (nome, turma) {
        this.alunos.push({ nome: nome, turma: turma, matriculado: true });
        return `${nome} matriculado na turma ${turma}.`;
    },
    realizarMatriculaProfessor: function (nome, disciplina) {
        this.professores.push({ nome: nome, disciplina: disciplina });
        return `${nome} agora leciona ${disciplina}.`;
    },
};


console.log(escola.realizarMatricula("Carla", "C")); 
console.log(escola.realizarMatriculaProfessor("Prof. Costa", "Biologia")); 
