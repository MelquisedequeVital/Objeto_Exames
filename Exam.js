export class Exam{
    constructor(resposta, peso){
        this.peso = peso;
        this.resposta = resposta;
        this.exams = []
    }

    adicionarProva(exame){
        exame.nota = Object.keys(exame.questoes).reduce((acumulador, q) => 
        {
            return acumulador + (this.resposta.questoes[q] === exame.questoes[q] ? this.peso[q] : 0)
        }, 0)

        this.exams.push(exame)
    }

    media(){
        let notas = this.exams.map((exame) => exame.nota)
        let soma = notas.reduce((acc, nota)=>
        {
            return nota + acc
        }, 0)
        return soma/this.exams.length
    }

    menorNota(){
        const menorNota = this.exams.reduce((menor, aluno) =>
        {
            return aluno.nota < menor ? aluno.nota : menor
        }, Infinity)

        return `Menor Nota: ${menorNota}`
    }

    maiorNota(){
        const maiorNota = this.exams.reduce((maior, aluno) =>
        {
            return aluno.nota > maior ? aluno.nota : maior
        }, 0)

        return `Maior Nota: ${maiorNota}`
        
    }

    notasMaiorQue(notaCompara){
        let notas = this.exams.map((exame) => exame.nota)
        let notaMaior = notas.filter(nota => nota > notaCompara)
        return notaMaior
    }

    notasMenorQue(notaCompara){
        let notas = this.exams.map((exame) => exame.nota)
        let notaMenor = notas.filter(nota => nota < notaCompara)
        return notaMenor
    }
    
}