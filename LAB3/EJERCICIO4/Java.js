document.getElementById('meetForm').addEventListener('Aceptar', function(event) {
    event.preventDefault();
    const url = document.getElementById('meetUrl').value;
    const code = extractMeetCode(url);
    document.getElementById('result').textContent = code ? `Código de la sesión: ${code}` : 'URL no válida';
});

function extractMeetCode(url) {
    const meetRegex = /https:\/\/meet\.google\.com\/([a-z]{3}-[a-z]{4}-[a-z]{3})/;
    const match = url.match(meetRegex);
    if (match && match[1]) {
        return match[1].replace(/-/g, '');
    } else {
        return null;
    }
}