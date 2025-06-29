export default class DropdownMenu
{
    constructor(menu)
    {
        this.dropdownMenu = document.querySelector(menu);

        this.dropdownClick = this.dropdownClick.bind(this);

    }

    clickForaDropdown()
    {
        const html = document.documentElement;
        html.addEventListener("click", (event) =>
        {
            if(!this.dropdownMenu.contains(event.target))
                this.dropdownMenu.classList.remove("ativo");

        });

    }

    dropdownClick(event)
    {
        event.preventDefault();
        this.dropdownMenu.classList.add("ativo");
        this.clickForaDropdown();

    }

    addDropdownEvent()
    {
        this.dropdownMenu.addEventListener("click", this.dropdownClick);
        this.dropdownMenu.addEventListener("touchstart", this.dropdownClick);

    }

    init()
    {
        if(this.dropdownMenu)
            this.addDropdownEvent();

        return this;

    }

}
