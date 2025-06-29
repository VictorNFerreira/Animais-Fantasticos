import AnimaNumeros from "/javascript/anima-numeros.js";

export default function criarAnimais(url, target)
{
    async function fetchAnimais()
    {
        const animais = await fetch(url);
        const result = await animais.json();
        result.forEach((animal) => preencherAnimal(animal));

        animaNumerosAnimais();

    }

    function preencherAnimal(animal)
    {
        const numerosAnimais = document.querySelector(target);
        const divAnimal = createAnimal(animal);
        numerosAnimais.appendChild(divAnimal);

    }

    function createAnimal(animal)
    {
        const div = document.createElement("div");

        div.classList.add("numero-animal");
        div.innerHTML = `<h2>${animal.especie}</h2><span data-numero>${animal.total}</span>`;

        return div;

    }

    function animaNumerosAnimais()
    {
        const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros");
        animaNumeros.init();

    }

    return fetchAnimais();

}
