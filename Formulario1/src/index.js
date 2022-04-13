const doc = document;

/* DOM: Document Object Model */

const $nombre = doc.querySelector('#txtNombre');
const $apellido = doc.getElementById('txtApellido');
const $form = doc.querySelector('#form');

$form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const $info = doc.querySelector('#info');
    const {value:nombre} = $nombre; 
    const {value:apellido} = $apellido; 
    console.log(nombre,apellido);
    const $p = doc.createElement('p');
    $p.innerHTML = `Nombre: ${nombre} <br/> apellido: ${apellido}`;
    $info.appendChild($p);
    console.log($info);
});