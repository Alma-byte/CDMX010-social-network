//este archivo tiene el enrrutador
import {bienvenida} from './components/bienvenida.js'
import {perfil} from './components/perfil.js'
import {contacto} from './components/contacto.js'

const routes = {
  '/' : bienvenida,
  '/contacto': contacto,
  '/perfil': perfil, 
};

const rootDiv=document.getElementById('root');
const roots = routes[window.location.pathname];
roots (rootDiv)

export function onNavigate(pathname){
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  const componentroot = routes[pathname];
  componentroot(rootDiv)
  }
