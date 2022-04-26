function trocarLista(){

    let el = document. getElementById('lista-normal');
    el. classList. add('lista-off');
    let le = document. getElementById('lista-zero');
    le.classList. remove('lista-off');

}

function trocarListaTradicional(){

    let el = document. getElementById('lista-normal');
    el. classList. remove('lista-off');

    let le = document. getElementById('lista-zero');
    le.classList. add('lista-off');
}