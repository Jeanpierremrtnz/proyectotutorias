document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
    } else {
        alert("Registro exitoso.");
        // Aquí iría el código para enviar el formulario al backend o realizar alguna acción.
    }
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    if (email === "" || password === "") {
        alert("Por favor, ingrese todos los campos.");
    } else {
        alert("Inicio de sesión exitoso.");
        // Aquí iría el código para validar el inicio de sesión.
    }
});
