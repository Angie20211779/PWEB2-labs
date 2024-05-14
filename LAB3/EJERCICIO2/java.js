document.getElementById('invertButton').addEventListener('click', function() {
    let input = document.getElementById('inputText').value;
    let output = document.getElementById('outputText');
    let textoInvertido = '';
    for (let i = input.length - 1; i >= 0; i--) {
      textoInvertido += input[i];
    }
    output.innerHTML = '<span>' + textoInvertido + '</span>';
  });
  