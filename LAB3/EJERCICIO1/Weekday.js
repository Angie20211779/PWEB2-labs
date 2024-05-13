document.addEventListener("DOMContentLoaded", function() {
    function obtenerDiaSemana(numeroDia) {
        let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        return diasSemana[numeroDia];
    }

    function mostrarResultado(nombreDia) {
        document.getElementById("resultado").textContent = nombreDia;
    }

    function mostrarDia() {
        let numeroDia = parseInt(document.getElementById("numeroDia").value);
        
        if (numeroDia >= 0 && numeroDia <= 6) {
            let nombreDia = obtenerDiaSemana(numeroDia);
            mostrarResultado(nombreDia);
        } else {
            mostrarResultado("Por favor, seleccione un número del 0 al 6");
        }
    }

    let mostrarBtn = document.getElementById("mostrarBtn");
    mostrarBtn.addEventListener("click", mostrarDia);
});
