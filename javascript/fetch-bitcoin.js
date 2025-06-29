export default function fetchBitcoin(url, target)
{
    const bitcoin = document.querySelector(target);
    const preco = fetch(url);
    
    preco.then((result) => result.json()).then((valor) =>
    {
        bitcoin.innerText = (100 / valor.BRL.sell).toFixed(5).toString().replace(".", ",");

    });

}
