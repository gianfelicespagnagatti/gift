// Password corretta
const CORRECT_PASSWORD = "12345"; // Cambia questa password con quella desiderata

document.getElementById('passwordForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita il refresh della pagina

    const inputPassword = document.getElementById('passwordInput').value;

    if (inputPassword === CORRECT_PASSWORD) {
        // Reindirizza alla pagina con l'immagine di sfondo
        window.location.href = "background.html";
    } else {
        // Mostra il messaggio di errore
        document.getElementById('errorMessage').classList.remove('hidden');
    }
});
