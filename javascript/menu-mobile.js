export default class initMenuMobile
{
    constructor(botao, lista)
    {
        this.botao = document.querySelector(botao);
        this.lista = document.querySelector(lista);

        this.abrirMenu = this.abrirMenu.bind(this);

    }

    clickForaMenu()
    {
        const html = document.documentElement;
        html.addEventListener("click", (event) => 
        {
            if(!this.botao.contains(event.target) && !this.lista.contains(event.target))
                this.lista.classList.remove("ativo");

        });

    }

    abrirMenu(event)
    {
        event.preventDefault();
        this.lista.classList.toggle("ativo");
        this.clickForaMenu();

    }

    addMenuEvent()
    {
        this.botao.addEventListener("click", this.abrirMenu); 
        this.botao.addEventListener("touchstart", this.abrirMenu); 

    }

    init()
    {
        if(this.botao && this.lista)
            this.addMenuEvent();

        return this;

    }

}
