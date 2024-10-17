function CalcularIMC() {
    const peso= parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if(isNaN(peso) ||isNaN(altura) || peso<0 || altura <= 0 )
        document.getElementById('resultado').innerText = "Por favor, insira valores validos.";
        return;
}

const imc = peso / (altura * altura);
let situacao = ' ';

if(imc < 20){
    situacao = "Abaixo do peso";
} else if (imc >= 20 && imc < 25) {
    situacao = "Normal"
}else if (imc >= 25 && imc < 30) {
    situacao = 'Sobrepeso';
} else if (imc >= 30 && imc < 35) {
    situacao = 'Obesidade grau I';
} else if (imc >= 35 && imc < 40) {
    situacao = 'Obesidade grau II';
} else {
    situacao = 'Obesidade grau III';
}

document.getElementById('resultado').innerText = 'Seu IMC é ${imc.toFixed(2)} (${situacao})'