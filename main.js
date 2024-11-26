import {Exam} from "./Exam.js" 

const resposta = {
    person: "Professor",
    questoes: {q1: "a", q2: "b", q3: "c", q4: "d", q5: "e"}
}

const peso = {q1: 2, q2: 2, q3: 2, q4: 2, q5: 2}

let exame = new Exam(resposta, peso)

let prova1 = {
    person: "Melquisedeque",
    questoes: {q1: "a", q2: "b", q3: "c", q4: "d", q5: "e"}
}

let prova2 = {
    person: "Ludmilla",
    questoes: {q1: "b", q2: "b", q3: "c", q4: "c", q5: "c"}
}

let prova3 = {
    person: "Murilo",
    questoes: {q1: "a", q2: "b", q3: "c", q4: "d", q5: "c"}
}

let prova4 = {
    person: "Mirelyza",
    questoes: {q1: "e", q2: "c", q3: "d", q4: "e", q5: "c"}
}

exame.adicionarProva(prova1)
exame.adicionarProva(prova2)
exame.adicionarProva(prova3)
exame.adicionarProva(prova4)

console.log(exame.media())
console.log(exame.maiorNota())
console.log(exame.menorNota())
console.log(exame.notasMaiorQue(5))
console.log(exame.notasMenorQue(5))
