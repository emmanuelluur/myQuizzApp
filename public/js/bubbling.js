/**
 * Written by Emmanuel Lucio Urbina
 * usando bubbling de eventos podemos ahorrar mucho codigo js
 * Mientras se carge este archivo con los elementos dentro de un contenedor myApp 
 * ualquier elemento que se haga click desencadenara eventos
 * si coincide alguno se ejecuta una peticion ya sea Get o POST o redireccion a un recurso REST
 */



const eventos = document.getElementById("myApp");

eventos.addEventListener('click', (element) => {
    //  Carga vista inicial
    if (element.target.getAttribute("name") == 'back') {
        location.href = "/";
    }
    //  Carga vista para adivinar pregunta
    if (element.target.getAttribute("name") == 'play') {
        location.href = `/quiz/play/${element.target.getAttribute("quizid")}`;
    }
    // Verifica Resupuesta
    if (element.target.getAttribute("name") == 'check') {
        alert("Verifica Respuesta")
    }
    //  Carga vista para editar pregunta
    if (element.target.getAttribute("name") == 'edit') {
        location.href = `/quiz/edit/${element.target.getAttribute("quizid")}`;

    }
    //  elimina pregunta de BD
    if (element.target.getAttribute("name") == 'delete') {
        let data = new FormData();
        data.append("quizid", element.target.getAttribute("quizid"))
        let c = confirm("Desea quitar pregunta?");
        const p = new Promise((resolve, reject) => {
            c ? resolve(true) : reject(false);
        });

        p
            .then(() => {
                // devuelve eliminar pregunta con post
                post("/delete/quiz", data)
                    .then(() => {
                        location.href = "/";
                    })
                    .catch(err => console.log(err))
            })
            .then(() => {
               
            }).catch((d) => { });
    }
    //  Carga vista para nueva pregunta
    if (element.target.getAttribute("name") == 'new') {
        location.href = "/quiz/new";
    }
    //  Actualiza pregunta
    if (element.target.getAttribute("name") == 'update') {
        let data = new FormData(document.getElementById("saveQuiz"));
        post("/update/quiz", data)
            .then(d => {
                document.getElementById("resMsg").innerHTML = `<div class = 'alert alert-success'> ${d}</div>`
            })
            .catch(err => console.log(err))
    }
    //  Guarda nueva pregunta
    if (element.target.getAttribute("name") == 'create') {
        let data = new FormData(document.getElementById("saveQuiz"));
        post("/create/quiz", data)
            .then(d => {
                document.getElementById("resMsg").innerHTML = `<div class = 'alert alert-success'> ${d}</div>`
            })
            .catch(err => console.log(err))

    }
});


