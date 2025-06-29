class Slide
{
    constructor(wrapper, slide)
    {
        this.wrapper = document.querySelector(wrapper);
        this.slide = document.querySelector(slide);
        this.distancias = {posicaoFinal: 0, startX: 0, movimento: 0, movePosition: 0};

        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);
        this.onResize = this.onResize.bind(this);
        this.ativaPrevSlide = this.ativaPrevSlide.bind(this);
        this.ativaNextSlide = this.ativaNextSlide.bind(this);

        this.changeEvent = new Event("change");

    }

    slideTransition(bool)
    {
        if(bool)
            this.slide.style.transition = "transform 0.3s";
        else
            this.slide.style.transition = "transform 0s";

    }

    onStart(event)
    {
        let moveType;

        if(event.type == "mousedown")
        {
            event.preventDefault();
            this.distancias.startX = event.clientX;
            moveType = "mousemove";

        }

        else
        {
            this.distancias.startX = event.changedTouches[0].clientX;
            moveType = "touchmove";

        }

        this.wrapper.addEventListener(moveType, this.onMove);
        this.slideTransition(false);

    }

    onMove(event)
    {
        let distX;

        if(event.type == "mousemove")
            distX = this.updatePosition(event.clientX);
        else
            distX = this.updatePosition(event.changedTouches[0].clientX);

        this.moveSlide(distX);

    }

    updatePosition(clientX)
    {
        this.distancias.movimento = (this.distancias.startX - clientX) * 1.4;
        return this.distancias.posicaoFinal - this.distancias.movimento;

    }

    moveSlide(distX)
    {
        this.distancias.movePosition = distX;
        this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;

    }

    onEnd(event)
    {
        let moveType;

        if(event.type == "mouseup")
            moveType = "mousemove";

        else
            moveType = "touchmove";

        this.wrapper.removeEventListener(moveType, this.onMove);
        this.distancias.posicaoFinal = this.distancias.movePosition;
        this.slideTransition(true);
        this.changeSlideMovimento();

    }

    changeSlideMovimento()
    {
        if(this.distancias.movimento > 200 && this.index.next != undefined)
            this.ativaNextSlide();
        else if(this.distancias.movimento < -200 && this.index.prev != undefined)
            this.ativaPrevSlide();
        else
            this.changeSlide(this.index.ativo);

    }

    slidesPosition(slide)
    {
        const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
        return -(slide.offsetLeft - margin);

    }

    slidesConfig()
    {
        this.slidesArray = [...this.slide.children].map((element) => 
        {
            const position = this.slidesPosition(element);
            return {element, position};

        });

    }

    slidesIndexNav(index)
    {
        const ultimo = this.slidesArray.length - 1;

        this.index = {prev: index - 1, ativo: index, next: index + 1};

        if(index == ultimo)
            this.index.next = undefined;
        else if(index == 0)
            this.index.prev = undefined;

    }

    changeSlide(index)
    {
        const slideAtivo = this.slidesArray[index];
        this.moveSlide(slideAtivo.position);
        this.slidesIndexNav(index);
        this.distancias.posicaoFinal = slideAtivo.position;
        
        this.wrapper.dispatchEvent(this.changeEvent);

    }

    ativaPrevSlide()
    {
        if(this.index.prev != undefined)
            this.changeSlide(this.index.prev);

    }

    ativaNextSlide()
    {
        if(this.index.next != undefined)
            this.changeSlide(this.index.next);

    }

    onResize()
    {
        setTimeout(() =>
        {
            this.slidesConfig();
            this.changeSlide(this.index.ativo);  

        }, 300);
        
    }

    addSlideEvent()
    {
        this.wrapper.addEventListener("mousedown", this.onStart);
        this.wrapper.addEventListener("touchstart", this.onStart);

        this.wrapper.addEventListener("mouseup", this.onEnd);
        this.wrapper.addEventListener("touchend", this.onEnd);

        window.addEventListener("resize", this.onResize);

    }

    init()
    {
        if(this.wrapper && this.slide)
            this.addSlideEvent();
            this.slideTransition(true);
            this.slidesConfig();
            this.changeSlide(0);

        return this;

    }

}

export default class SlideNav extends Slide
{
    constructor(slide, wrapper)
    {
        super(slide, wrapper);
        this.controleEvent = this.controleEvent.bind(this);

    }

    criaControle()
    {
        const controle = document.createElement("ul");
        controle.dataset.control = "slide";

        this.slidesArray.forEach((slide, index) =>
        {
            controle.innerHTML = controle.innerHTML + `<li><a href="#slide${index + 1}">${index + 1}</a></li>`;

        });

        this.wrapper.appendChild(controle);
        return controle;

    }

    controleEvent(slide, index)
    {
        this.controleArray.forEach((slide) => slide.classList.remove("ativo"));
        this.controleArray[this.index.ativo].classList.add("ativo");

        slide.addEventListener("click", (event) =>
        {
            event.preventDefault();
            this.changeSlide(index);
            
        })

        this.wrapper.addEventListener("change", () =>
        {
            this.controleArray.forEach((slide) => slide.classList.remove("ativo"));
            this.controleArray[this.index.ativo].classList.add("ativo");

        });

    }

    addControle()
    {
        this.controle = this.criaControle();
        this.controleArray = [...this.controle.children];
        this.controleArray.forEach(this.controleEvent); 
        
    }
    
}
