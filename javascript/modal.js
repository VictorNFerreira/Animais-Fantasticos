export default class Modal
{
    constructor(botaoAbrir, botaoFechar, modal)
    {
        this.botaoAbrir = document.querySelector(botaoAbrir);
        this.botaoFechar = document.querySelector(botaoFechar);
        this.modal = document.querySelector(modal);

        this.abrirModal = this.abrirModal.bind(this);
        this.fecharModal = this.fecharModal.bind(this);
        this.clickForaModal = this.clickForaModal.bind(this);
    }

    abrirModal(event)
    {
        event.preventDefault();
        this.modal.classList.add("ativo");

    }

    fecharModal()
    {
        this.modal.classList.remove("ativo");

    }

    clickForaModal(event)
    {
        if(event.target == this.modal)
            this.fecharModal();

    }

    addModalEvent()
    {
        this.botaoAbrir.addEventListener("click", this.abrirModal);
        this.botaoFechar.addEventListener("click", this.fecharModal);
        this.modal.addEventListener("click", this.clickForaModal);

    }

    init()
    {
        if(this.botaoAbrir && this.botaoFechar && this.modal)
            this.addModalEvent();

        return this;
        
    }

}
