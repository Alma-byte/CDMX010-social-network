//este archivo tiene el enrrutador
import {bienvenida} from './components/bienvenida.js'
import {perfil, setMessageStorage} from './components/perfil.js'
import {contacto} from './components/contacto.js'


let welcome = bienvenida(); //bienvenida es una vista
let post = perfil();
let contact = contacto();

const routes = {
  '/' : welcome,
  '/contacto': contact,
  '/perfil': post, 
};

let rootDiv=document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

// escribir el onNavigate y serciorame que sirva que este bien escrita puedo usar console.log( ) para ver que devuelve
function onNavigate(pathname){
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  rootDiv.innerHTML = routes[pathname];
    setMessageStorage();
  }
  
  let contactDom = document.getElementById('inicio')
  contactDom.addEventListener('click', function(){
    onNavigate('/perfil')
  console.log("YA hice click soy pagina de perfil") //esto lo vaz a borrar
}

)

