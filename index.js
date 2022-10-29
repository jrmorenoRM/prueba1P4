const express = require("express"),
    path = require("path"),
    app = express(),
    puerto = 3000;

app.get('/', (peticion, respuesta) => {
    
});

app.get('/pagina/:numero', (peticion, respuesta) => {
    // Servir archivo HTML, o cualquier otro archivo
   let opcion=peticion.params.numero
   let tabla ={}
    switch(opcion){
        case 1:
            tabla={
                   "1":1 
            }

        break;

    }



    respuesta.json(tabla);
});





// Una vez definidas nuestras rutas podemos iniciar el servidor
app.listen(puerto, err => {
    if (err) {
        // Aquí manejar el error
        console.error("Error escuchando: ", err);
        return;
    }
    // Si no se detuvo arriba con el return, entonces todo va bien ;)
    console.log(`Escuchando en el puerto :${puerto}`);
});