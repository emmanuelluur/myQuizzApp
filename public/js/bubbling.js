/**
 * By @Emmanuelluur
 * usando bubbling de eventos podemos ahorrar mucho codigo js
 * Mientras se carge este archivo con los elementos dentro de un contenedor myApp 
 * ualquier elemento que se haga click desencadenara eventos
 * si coincide alguno se ejecuta una peticion ya sea Get o POST o redireccion a un recurso REST
 */



const eventos = document.getElementById("myApp");

eventos.addEventListener('click', (element) => {
    if (element.target.getAttribute("name") == 'back') {
        location.href = "/";
    }
    if (element.target.getAttribute("name") == 'play') {
        location.href = `/quiz/play/${element.target.getAttribute("quizid")}`;
    }
    if (element.target.getAttribute("name") == 'edit') {
        location.href = `/quiz/edit/${element.target.getAttribute("quizid")}`;

    }
    if (element.target.getAttribute("name") == 'delete') {
        let data = new FormData();
        data.append("quizid", element.target.getAttribute("quizid"))
        let c = confirm("Desea quitar pregunta?");
        const p = new Promise((resolve, reject) => {
            c ? resolve(true) : reject(false);
        });

        p
            .then(() => {
                // devuelve eliminar pregunta hacerla con post
                post("/delete/quiz", data)
                    .then(() => {
                        location.href = "/";
                    })
                    .catch(err => console.log(err))
            })
            .then(() => {
               
            }).catch((d) => { });
    }
    if (element.target.getAttribute("name") == 'new') {
        location.href = "/quiz/new";
    }
    if (element.target.getAttribute("name") == 'update') {
        let data = new FormData(document.getElementById("saveQuiz"));
        post("/update/quiz", data)
            .then(d => {
                document.getElementById("resMsg").innerHTML = `<div class = 'alert alert-success'> ${d}</div>`
            })
            .catch(err => console.log(err))
    }
    if (element.target.getAttribute("name") == 'create') {
        let data = new FormData(document.getElementById("saveQuiz"));
        post("/create/quiz", data)
            .then(d => {
                document.getElementById("resMsg").innerHTML = `<div class = 'alert alert-success'> ${d}</div>`
            })
            .catch(err => console.log(err))

    }
});


