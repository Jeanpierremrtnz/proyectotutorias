document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let rol = document.getElementById('rol').value;
    
    if (nombre && email && password) {
        alert(`Registro exitoso como ${rol}`);
    } else {
        alert("Por favor, complete todos los campos.");
    }
});

