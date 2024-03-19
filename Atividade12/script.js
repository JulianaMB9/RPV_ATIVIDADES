function botao1(){
    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');

    h1.style.color = 'red';
    p.style.color = 'blue';
}

function botao2(){
    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');

    h1.style.fontSize= '20px';
    p.style.fontSize= '16px';

}

function botao3(){
    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');

    h1.innerHTML +=  'Novo texto';
    p.innerHTML +=  'Novo texto';

}

