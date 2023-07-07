
// Validar
function validarFormulario(event) {
    event.preventDefault();
  
    // Valorar
    const nombre = document.getElementById('name').value.trim();
    const apellido = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const categoria = document.getElementById('inputState').value;
  
    // Validar los campos
    if (nombre === '' || apellido === '' || email === '' || isNaN(cantidad)) {
      alert('complete todos los campos requeridos y asegúrese de ingresar un número válido en la cantidad.');
      return;
    }
  
    // Validar correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('ingrese un correo electrónico válido.');
      return;
    }
  
    // Cálculo
    let totalPagar = 0;
    switch (categoria) {
        case 'Ninguna':
            totalPagar = cantidad * 200 ;
            break;
      case 'Estudiante':
        totalPagar = cantidad * 200 * 0.2;
        break;
      case 'Trainee':
        totalPagar = cantidad * 200 * 0.5;
        break;
      case 'Junior':
        totalPagar = cantidad * 200 * 0.85;
        break;
      default:
        alert('seleccione una categoría válida.');
        return;
    }
  
    // Mostrar resultado
    document.getElementById('calculo').textContent = 'Total a Pagar: $' + totalPagar.toFixed(2);
  }
  
  // Borrar campos
  function borrarCampos() {
    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('inputState').value = 'Estudiante';
    document.getElementById('calculo').textContent = 'Total a Pagar: $';
  }
  

  const formulario = document.getElementById('form');

  formulario.addEventListener('submit', validarFormulario);
  

  const botonBorrar = document.querySelector('#form button[type="button"]');

  botonBorrar.addEventListener('click', borrarCampos);
  


