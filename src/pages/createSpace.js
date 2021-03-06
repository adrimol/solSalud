import doctorProfile from '../template/doctorProfile';
import { timeStamp } from '../firebase/init';
import { doctorPost } from '../firebase/doctorPost';

const createSpace = () => {
  const view = `
  <form id="event_form" class="centerColumn">
    <input id="date" type="date" class="input" placeholder="Fecha" required/>
    <input id="time" type="time" class="input" placeholder="Hora" required/>
    <input id="place" type="text" class="input" placeholder="Direccion" required/>
    <input id="note" type="text" class="input" placeholder="Nota" required/>
    <button class="button">Crear</button>
  </form>
  <a class="link" href="#/perfil-doctor">Cancelar</a>
  `;
  const container = document.createElement('section');
  container.innerHTML = view;
  const eventForm = container.querySelector('#event_form');
  container.insertAdjacentElement('afterbegin', doctorProfile())

  const createSpace = () => {   
    const infLocalStorage = localStorage.getItem('session');
    const convetInfoJson = JSON.parse(infLocalStorage);
    const IdUser = convetInfoJson.user.uid;    
    const hour = document.getElementById('time').value;
    const date = document.getElementById('date').value;
    const place = document.getElementById('place').value;
    const note = document.getElementById('note').value; 
    
    const spaceToCreate = {
      id: IdUser,          
      fechaPublicacion: timeStamp,
      hora: hour,
      fechaConsulta: date,      
      lugar: place,
      nota: note,
      reservada: ''
    };

    doctorPost(spaceToCreate);
  }
  
  eventForm.addEventListener('submit', (e) => { e.preventDefault(); createSpace(); });
  return container
}

export default createSpace;