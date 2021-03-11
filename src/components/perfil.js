//
//import {setHtml} from './post.js';

//pagina de bienvenida
export const perfil = (container) => { 
    const html = `<div>
    <div><h2 id=frase>¿cómo la estas pasando?</h2>
    <textarea id="entrada" name="publicar" placeholder="Vamas publica" rows="5" cols="35"></textarea>
    <button class=boton id="guardar">create post</button>
    <textarea id="salida" name="publicar" cols="35"></textarea>
    </div>`

    container.innerHTML = html

    const setMessage = (message) => {
        console.log('message', message);
        const posts = [];
        posts.push(message);
        console.log(posts)
        return posts;
    };

    const btnPublicar = document.getElementById("guardar");
    btnPublicar.addEventListener("click",(e)=>{
        e.preventDefault();
        let newMessage = document.getElementById('entrada').value; 
        setMessages(newMessage);
        const post =JSON.parse(localStorage.getItem("userMessage"));
        console.log('post', post);
        setMessage(post);
    })
 
    const setMessages = (message) => {
        localStorage.setItem('userMessage', JSON.stringify(message));
/*         let pintar = document.getElementById('salida');
        pintar.innerHTML = message; */
    }
    
};
