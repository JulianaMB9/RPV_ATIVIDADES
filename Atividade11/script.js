function clique() {
    alert('clicou no botão');
}

function clique() {
    const teste = document.querySelector('.teste2');
    const ul = document.querySelector('ul');

    // console.log(ul.innerHTML);
    // ul.children.append('Novo item');

    // ul.innerHTML += '<li> Item 3 </li>';

    // console.log(ul.innerHTML);

    for (let i = 0; i < 5; i++) {
        let newli = document.createElement('li');
        newli.innerHTML = 'novo item ' ;

        ul.appendChild(newli);

        // ul.prepend(newli);
    }

}


