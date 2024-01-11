const prompt = require('prompt-read')

do{
console.clear()

function palindrome(str){
    var re = /[^A-Za-z0–9]/g //Expressão regular pra retirar tudo de A-Z, a-z, 0-9 e teste expecífico pra palavra com símbolos "_"
   
    var lowRegStr = str.toLowerCase().replace(re, ''); //Expressão pra tornar as palavras para lower case e para apagar os espaços entre as palavras para fazer a verificação

    var reverseStr = lowRegStr.split('').reverse().join(''); //Expressão pra fazer um array de string, reverter ela e depois juntar novamente

    return reverseStr === lowRegStr //Verifica então se o string em reverse for igual ao string normal retorna "true", se não "false"
}

//Pedido de entrada
let entry = prompt("Digite uma palavra para fazer a verificação se é um palíndromo: ")
if(palindrome(entry)){
    console.log(`${entry} é um palíndromo!`)
} else{
    console.log(`${entry} não é um palíndromo.`)
}
var resp = prompt("Você quer continuar verificando palavras sim ou não ? ")
} while(resp === 'sim')
