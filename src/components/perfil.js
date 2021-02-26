//pagina de bienvenida
export function perfil(){
    return `<div>
    <header></header>
    <div><button class=boton id="publicar">creat post</button>
    <textarea id="entrada" name="publicar"  rows="10" cols="40">Escribe aquí lo que quieras publicar</textarea>
    <footer><a href="https://en.bikebike.org/" class="pag">bike.bike.org</a></footer>
    </div>`
}

export const setMessageStorage = () => {
    let btnPublicar = document.getElementById("publicar");

    btnPublicar.addEventListener("click",()=>{
        let message = document.getElementById('entrada').value; 
        setMessage(message);
    });
};

const setMessage = (message) => {
  localStorage.setItem('userMessage', message);
  console.log(localStorage.getItem('userMessage'));
};

// Cada una de las siguientes
// instrucciones actualiza la página
//window.history.go(0);
//window.history.go();

//location.reload(true); para recargar la pagina por la fuerza
