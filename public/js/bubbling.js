/**
 * By @Emmanuelluur
 * usando bubbling de eventos podemos ahorrar mucho codigo js
 * Mientras se carge este archivo con los elementos dentro de un contenedor myApp 
 * ualquier elemento que se haga click desencadenara eventos
 * si coincide alguno se ejecuta una peticion ya sea Get o POST o redireccion a un recurso REST
 */



const eventos = document.getElementById("myApp");

eventos.addEventListener('click', (element)=>{
    if(element.target.getAttribute("name")=='back') {
        location.href = "/";
    }
    if(element.target.getAttribute("name")=='play') {
        alert('Play' + element.target.getAttribute("quizid"))
    }
    if(element.target.getAttribute("name")=='edit') {
        location.href = `/quiz/edit/${element.target.getAttribute("quizid")}`;
        
    }
    if(element.target.getAttribute("name")=='delete') {
        alert('Delete' + element.target.getAttribute("quizid"))
    }
    if(element.target.getAttribute("name")=='new') {
        location.href = "/quiz/new";
    }
    if(element.target.getAttribute("name")=='update') {
        alert('Saved Edited Question');
    }
    if(element.target.getAttribute("name")=='create') {
        alert('Saved Question');
    }
});