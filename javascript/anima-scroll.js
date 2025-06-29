export default class AnimaScroll
{
    constructor(sections)
    {
        this.sections = document.querySelectorAll(sections);
        this.windowMetade = window.innerHeight * 0.6;

        this.checkDistance = this.debounce(this.checkDistance.bind(this), 50);

    }

    debounce(callback, delay)
    {
        let timer;

        return (...args) =>
        {
            if(timer)
                clearTimeout(timer);

            timer = setTimeout(() => 
            {
                callback(...args);
                timer = null;

            }, delay);

        }

    }

    getDistance()
    {
        this.distance = [...this.sections].map((secao) =>
        {
            const offset = secao.offsetTop;
            return {element: secao, offset: offset - this.windowMetade};

        });

    }

    checkDistance()
    {
        this.distance.forEach((secao) => 
        {
            if(secao.offset < window.scrollY)
                secao.element.classList.add("ativo");

        });

    }

    init()
    {
        if(this.sections.length)
        {
            this.getDistance();
            this.checkDistance();
            window.addEventListener("scroll", this.checkDistance);

        }

        return this;
        
    }    

}
