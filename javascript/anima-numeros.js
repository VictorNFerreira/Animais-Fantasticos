export default class AnimaNumeros
{
    constructor(numeros, secao)
    {
        this.numeros = document.querySelectorAll(numeros);
        this.secao = document.querySelector(secao);

        this.handleMutacao = this.handleMutacao.bind(this);

    }

    static aumentarNumero(numero)
    {
        const total = +numero.innerText;
        const incremento = Math.floor(total / 80);
        let i = 0;
        const timer = setInterval(() =>
        {
            i = i + incremento;
            numero.innerText = i;
                    
            if(i > total)
            {
                numero.innerText = total;
                clearInterval(timer);
            }

        }, 0, i);

    }

    animarNumeros()
    {
        this.numeros.forEach((numero) => AnimaNumeros.aumentarNumero(numero));

    }

    handleMutacao(mutacao)
    {
        if(mutacao[0].target.classList.contains("ativo"))
        {
            this.observador.disconnect();
            this.animarNumeros();
        }
            
    }

    addMutacaoObserver()
    {
        this.observador = new MutationObserver(this.handleMutacao);
        this.observador.observe(this.secao, {attributes: true});

    }

    init()
    {
        if(this.numeros.length && this.secao)
            this.addMutacaoObserver();

        return this;

    }

}
