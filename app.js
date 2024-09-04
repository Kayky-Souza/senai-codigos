const botoes = document.getElementsByClassName('botao-teste');
Array.from(botoes).forEach(botao => {
    botao.addEventListener('click', function() {
        const corAleatoria = '#' + Math.floor(Math.random() * 16777215).toString(16);
        this.style.backgroundColor = corAleatoria;
    });
});
// var nome
// nome = "meu nome";
// var x = 10
// var y = 30


// function somar(valor1,valor2) {
//     console.log(valor1+valor2)    
// }
// function subtrair(valor1,valor2) {
//     console.log(valor1-valor2)    
// }
// function multiplicar(valor1,valor2) {
//     console.log(valor1*valor2)    
// }
// function dividir(valor1,valor2) {
//     console.log(valor1/valor2)    
// }
function opBasica(op) {
    const input1 = document.getElementById("num1");
    const valor1 = Number(input1.value)
    const input2 = document.getElementById("num2");
    const valor2 = Number(input2.value)

    if(op == "somar"){
        console.log(valor1+valor2)
        const inputResposta = document.getElementById("resposta");
        inputResposta.textContent = valor1+valor2
    }
    if(op == "subtrair"){
        console.log(valor1-valor2)
        const inputResposta = document.getElementById("resposta");
        inputResposta.textContent = valor1-valor2
    }
    if(op == "multiplicar"){
        console.log(valor1*valor2)
        const inputResposta = document.getElementById("resposta");
        inputResposta.textContent = valor1*valor2
    }
    if(op == "dividir"){
        console.log(valor1/valor2)
        const inputResposta = document.getElementById("resposta");
        inputResposta.textContent = valor1/valor2
    }
}