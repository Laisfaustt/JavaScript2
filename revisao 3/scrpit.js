// função declarativa
function saudacao(){
    console.log("Olá")
} 
saudacao() //chamando a função

//função com parametro e retorno
function dobrar(numero){
    return numero * 2
}
let resultado = dobrar(5)
console.log(resultado)

//função anônima
let mostrarMensagem = function (){
    console.log("Função anônima")
}
mostrarMensagem()

//Arrow function
const somar = (a,b) => {
    return a + b
}
console.log(somar(3,3))
//-----------------------------------------

//Manipulção do DOM

//mudar texto
let paragrafo = document.getElementById("mensagem")
paragrafo.innerText = "Texto alterado"

// alterar estilo
let titulo = document.getElementById("titulo")
titulo.style.color = "blue"
titulo.style.fontSize = "30px"

//criar novo item
let novoItem = document.createElement("li")
novoItem.innerText = "Novo item"
document.body.appendChild(novoItem)

//apagar elemento
let apagar = document.getElementById("apagar")
apagar.remove()

//-----------------------------------
//Eventos DOM
let botao = document.getElementById("botao")
botao.addEventListener("click", function(){
    alert("voce clicou no botao")
}) 

function mostrarNome(){
    let nome = document.getElementById("nome").value
    document.getElementById("resposta").innerText = "voce digitou: " + nome
}

function mudarCor() {
    document.getElementById("caixa").style.backgroundColor = "blue"
    document.getElementById("caixa").innerText = "Passou o mouse"
}
function corOriginal() {
    document.getElementById("caixa").style.backgroundColor = "red"
}