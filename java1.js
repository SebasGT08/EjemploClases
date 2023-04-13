window.addEventListener('load',function () {
    
    var btnCont= document.querySelector('#btnCont');
    var titulo = document.querySelector('#titulo');
    var contenedor = document.querySelector('#contenedor1');
    var cont=0;

    var lista = document.querySelector('#lista1');

    btnCont.addEventListener('click',function () {
        titulo.innerHTML="Contador";
        cont++;
        let elemento = document.createElement('li');
        elemento.innerHTML=cont;
        lista.append(elemento);
    });


});