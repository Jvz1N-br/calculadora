function insert(numero){
    let num = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = num + numero;
}

function clean(){
    document.getElementById("display").innerHTML = "";
}

function calculo(){
    let resposta = document.getElementById("display").innerHTML;
    if(resposta){
        document.getElementById("display").innerHTML = eval(resposta);
    }else{
        document.getElementById("display").innerHTML = "Digite os numeros";
    }
}

function back(){
    let resultado = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = resultado.substring(0, resultado.length -1);
}

function percent() {
    let display = document.getElementById("display");
    let current = display.innerHTML;

    if (current) {
        // Verifica se o último caractere é um número
        if (!isNaN(current.slice(-1))) {
            // Converte o número mais recente em porcentagem
            let parts = current.match(/(\d+(\.\d+)?)(?!.*\d)/); // Pega o último número
            if (parts) {
                let number = parts[0];
                let percentage = parseFloat(number) / 100;
                display.innerHTML = current.replace(new RegExp(number + '$'), percentage);
            }
        }
    }
}