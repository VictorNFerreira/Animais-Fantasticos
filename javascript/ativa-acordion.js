export default class AtivaAcordion
{
    constructor(lista)
    {
        this.acordionLista = document.querySelectorAll(lista);

    }

    ativaAcordion(pergunta)
    {
        pergunta.nextElementSibling.classList.toggle("ativo");

    }

    addAcordionEvent()
    {
        this.acordionLista.forEach((pergunta) => pergunta.addEventListener("click", () => this.ativaAcordion(pergunta)));

    }

    init()
    {
        if(this.acordionLista.length)
        {
            this.ativaAcordion(this.acordionLista[0]);
            this.addAcordionEvent();

        }

        return this;

    }

}
