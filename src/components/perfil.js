//pagina de bienvenida
export function perfil(container){
    const html = `<div>
    <div><h2 id=frase>¿cómo la estas pasando?</h2>
    <textarea id="entrada" name="publicar" placeholder="Vamas publica" rows="5" cols="35"></textarea>
    <button class=boton id="guardar">creat post</button>
    <textarea id="salida" name="publicar" cols="35"></textarea>
    </div>`

    container.innerHTML = html

}

 const setMessageStorage = () => {
    let btnPublicar = document.getElementById("guardar");

    btnPublicar.addEventListener("click",()=>{
        let message = document.getElementById('entrada').value; 
        setMessage(message);
    
    }); 
};

const setMessage = (message) => {
    localStorage.setItem('userMessage', message);
    console.log(localStorage.getItem('userMessage'));

    let pintar = document.getElementById('salida');
    pintar.innerHTML = message;

};

    