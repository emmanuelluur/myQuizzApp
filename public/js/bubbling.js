/**
 * By @Emmanuelluur
 * usando bubbling de eventos podemos ahorrar mucho codigo js
 * Mientras se carge este archivo con los elementos dentro de un contenedor myApp 
 * ualquier elemento que se haga click desencadenara eventos
 * si coincide alguno se ejecuta una peticion ya sea Get o POST
 */



const eventos = document.getElementById("myApp");

eventos.addEventListener('click', (element)=>{
    if(element.target.getAttribute("name")=='play') {
        alert('Play' + element.target.getAttribute("quizid"))
    }
    if(element.target.getAttribute("name")=='edit') {
        alert('Edit' + element.target.getAttribute("quizid"))
    }
    if(element.target.getAttribute("name")=='delete') {
        alert('Delete' + element.target.getAttribute("quizid"))
    }
    if(element.target.getAttribute("name")=='new') {
        alert('New Question')
    }
});