export default class Funcionamento
{
    constructor(funcionamento)
    {
        this.funcionamento = document.querySelector(funcionamento);

    }

    dadosFuncionamento()
    {
        this.diasSemana = this.funcionamento.dataset.semana.split(", ").map(Number);
        this.horario = this.funcionamento.dataset.horario.split(", ").map(Number);

    }

    dadosAbertura()
    {
        this.dataAgora = new Date;
        this.diasAberto = this.diasSemana.indexOf(this.dataAgora.getDay());
        this.horasAberto = this.dataAgora.getUTCHours() - 3;

    }

    ativaFuncionamento()
    {
        if(this.diasAberto != -1 && this.horasAberto >= this.horario[0] && this.horasAberto < this.horario[1])
            this.funcionamento.classList.add("aberto");

    }

    init()
    {
        if(this.funcionamento)
            this.dadosFuncionamento();
            this.dadosAbertura();        
            this.ativaFuncionamento();

        return this;

    }

}
