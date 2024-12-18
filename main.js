// Seleccionar el contenedor donde se añadirá todo el contenido
const app = document.getElementById('app');

// Crear el nav
const nav = document.createElement('nav');
nav.className = 'menu-bar';

// Crear el div para el reloj
const clockDiv = document.createElement('div');
clockDiv.id = 'clock'; // ID para el reloj

// Crear el input checkbox (menú hamburguesa)
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'menu-toggle';
checkbox.hidden = true;

// Crear la etiqueta (botón hamburguesa)
const label = document.createElement('label');
label.htmlFor = 'menu-toggle';
label.className = 'menu-icon';
label.innerHTML = '&#9776;'; // Ícono de hamburguesa

// Crear el div para el version
const versionDiv = document.createElement('div');
versionDiv.className = 'version';
versionDiv.textContent = 'version';

// Crear el contenedor del menú desplegable
const dropdownMenu = document.createElement('div');
dropdownMenu.className = 'dropdown-menu';

// Crear la X para cerrar el menú dentro del menú desplegable
const closeMenu = document.createElement('div');
closeMenu.className = 'close-menu';
closeMenu.textContent = '×'; // La X para cerrar el menú

// Crear los enlaces del menú
const menuItems = [
  { text: 'Inicio', href: '#inicio' },
  { text: 'Nosotros', href: '#nosotros' },
  { text: 'Servicios', href: '#servicios' },
  { text: 'Contacto', href: '#contacto' }
];

// Generar los enlaces dinámicamente
menuItems.forEach(item => {
  const link = document.createElement('a');
  link.href = item.href;
  link.textContent = item.text;
  dropdownMenu.appendChild(link);
});

// Insertar la X en el menú desplegable
dropdownMenu.appendChild(closeMenu);

// Insertar los elementos en el nav
nav.appendChild(versionDiv);
nav.appendChild(clockDiv);
nav.appendChild(label);
nav.appendChild(dropdownMenu);

// Agregar el nav al contenedor principal
app.appendChild(nav);

// Función para actualizar el reloj
function actualizarReloj() {
  const reloj = document.getElementById('clock');
  const ahora = new Date();
  const horas = String(ahora.getHours()).padStart(2, '0');
  const minutos = String(ahora.getMinutes()).padStart(2, '0');
  const segundos = String(ahora.getSeconds()).padStart(2, '0');
  const fecha = `${String(ahora.getDate()).padStart(2, '0')}/${String(ahora.getMonth() + 1).padStart(2, '0')}/${String(ahora.getFullYear()).slice(-2)}`;
  reloj.innerHTML = `<div>${fecha}</div><div>${horas}:${minutos}:${segundos}</div>`;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);
// Mostrar la hora inicial
actualizarReloj();

// Funcionalidad del menú desplegable
label.addEventListener('click', () => {
  dropdownMenu.style.display = 'block'; // Mostrar el menú
});

// Funcionalidad de la X para cerrar el menú
closeMenu.addEventListener('click', () => {
  dropdownMenu.style.display = 'none'; // Ocultar el menú
});
