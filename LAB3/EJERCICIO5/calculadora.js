document.getElementById('numForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numValues = document.getElementById('numValues').value;
    generateTable(numValues);
});

function generateTable(numValues) {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headerRow = document.createElement('tr');
    const headerCell = document.createElement('th');
    headerCell.textContent = 'Valores';
    headerRow.appendChild(headerCell);
    thead.appendChild(headerRow);

    for (let i = 0; i < numValues; i++) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        const randomValue = Math.floor(Math.random() * 100) + 1; 
        cell.textContent = randomValue;
        row.appendChild(cell);
        tbody.appendChild(row);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    tableContainer.appendChild(table);

    const sumButton = document.createElement('button');
    sumButton.textContent = 'Calcular Suma';
    sumButton.addEventListener('click', calculateSum);
    tableContainer.appendChild(sumButton);
}

function calculateSum() {
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tbody tr');
    let sum = 0;

    rows.forEach(row => {
        const value = parseInt(row.cells[0].textContent);
        sum += value;
    });

    const resultPara = document.createElement('p');
    resultPara.textContent = `La suma de todos los valores es: ${sum}`;
    document.getElementById('tableContainer').appendChild(resultPara);
}