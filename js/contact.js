function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
        alert("Rellena los campos");
        return;
    }

    // Aquí código para enviar correos

    alert("Gracias por contactarnos");
    return;
}