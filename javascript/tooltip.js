export default class Tooltip
{
    constructor(tooltips)
    {
        this.tooltips = document.querySelectorAll(tooltips);

        this.mouseOver = this.mouseOver.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.mouseMove = this.mouseMove.bind(this);

    }

    mouseOver(event)
    {
        this.criarTooltipBox(event.currentTarget);

        event.currentTarget.addEventListener("mouseleave", this.mouseLeave);
        event.currentTarget.addEventListener("mousemove", this.mouseMove);

    }

    criarTooltipBox(element)
    {
        const tooltipBox = document.createElement("div");
        const texto = element.getAttribute("aria-label");

        tooltipBox.classList.add("tooltip");
        tooltipBox.innerText = texto;

        document.body.appendChild(tooltipBox);
        this.tooltipBox = tooltipBox;

    }

    mouseLeave()
    {
        this.tooltipBox.remove();

    }

    mouseMove(event)
    {
        this.tooltipBox.style.top = event.pageY + 20 + "px";

        if(event.pageX + 220 > window.innerWidth)
            this.tooltipBox.style.left = event.pageX - 180 + "px";

        else
            this.tooltipBox.style.left = event.pageX + 20 + "px";

    }

    addTooltipEvent()
    {
        this.tooltips.forEach((tooltip) => tooltip.addEventListener("mouseover", this.mouseOver));

    }

    init()
    {
        if(this.tooltips.length)
            this.addTooltipEvent();

        return this;

    }

}
