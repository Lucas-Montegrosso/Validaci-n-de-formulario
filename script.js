document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()

    // Validar campo nombre
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if (entradaNombre.value.trim() === ''){
        errorNombre.textContent = 'Por favor, introducí tu nomnre'
        errorNombre.classList.add('error-message')
    } else {
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }

    // Validar correo electrónico
    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón de validación básico
    
    if(!emailPattern.test(emailEntrada.value)){
        emailError.textContent = 'Por favor, intruducí un mail válido'
        emailError.classList.add('error-message')
    } else {
        emailError.textContent = ''
        emailError.classList.remove('error-message')
    }

    // Validar contraseña
    let constrasenaEntrada = document.getElementById('password')
    let contrasenaError = document.getElementById('passwordError')

    if(constrasenaEntrada.value.length < 8){
        contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres'
        contrasenaError.classList.add('error-message')
    } else {
        contrasenaError.textContent = ''
        contrasenaError.classList.remove('error-message')
    }

    // Si tdos los campos son válidos enviar formilario

    if(!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent){

        // BACKEND QUE RECIBA LA INFORMACIÓN
        alert('El formulario se ha enviado con exito')
        document.getElementById('formulario').reset();
    }





})