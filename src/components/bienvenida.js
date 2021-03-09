//pagina de bienvenida
import {onNavigate} from '../main.js' 

export function bienvenida(container){
    const html= `<div>
    <h1 class="wel">bienvenidx a la reunión internacional
     anual, organizada por y para proyectos comunitarios que
     trabajan en proyectos de bici.</h1>
      <div><button class=boton id="inicio">BICI BICI</button>
    </div>`

    container.innerHTML = html

    let postDom = document.getElementById('inicio')
    postDom.addEventListener('click', function(){
      onNavigate ('/perfil');
  })
};

