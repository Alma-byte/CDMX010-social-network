//
import {setHtml} from './post.js';

//pagina de bienvenida
export const perfil = (container) => { 
    const html = `<div>
    <div><h2 id=frase>¿cómo la estas pasando?</h2>
    <textarea id="entrada" name="publicar" placeholder="Vamas publica" rows="5" cols="35"></textarea>
    <button class=boton id="guardar">creat post</button>
    <textarea id="salida" name="publicar" cols="35"></textarea>
    </div>`

    container.innerHTML = html
    let postureoList = JSON.parse(localStorage.getItem("posteo"));
    if (postureoList=null){
       postureoList=[]
     postureoList.forEach(element => {
        container.innerHTML += setHtml(element)
     });  
   

    const btnPublicar = document.getElementById("guardar");
    btnPublicar.addEventListener("click",(event)=>{
        event.preventDefault();
        let newMessage = document.getElementById('entrada').value; 
        setMessage(newMessage);
        setMessages();
    })
};

const setMessage = (post) => {
    let item = {
        post: post,
    }
    postureoList.push(item);
    return item;
}
const setMessages = () => {
    localStorage.setItem('posteo',JSON.stringify(postureoList));
}}


    