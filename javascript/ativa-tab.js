export default class AtivaTab
{
    constructor(menu, conteudo)
    {
        this.tabMenu = document.querySelectorAll(menu);
        this.tabConteudo = document.querySelectorAll(conteudo);

    }

    ativaTab(i)
    {
        this.tabConteudo.forEach((item) => item.classList.remove("ativo"));
        this.tabConteudo[i].classList.add("ativo", this.tabConteudo[i].dataset.anime);

    }

    addTabEvent()
    {
        this.tabMenu.forEach((animal, index) => animal.addEventListener("click", () => this.ativaTab(index)));

    }

    init()
    {
        if(this.tabMenu.length && this.tabConteudo.length)
        {
            this.ativaTab(0);
            this.addTabEvent();

        }

        return this;

    }

}
