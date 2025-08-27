//1
function saudacao(){
    console.log("suadacao")
}
saudacao()

//2
function cumprimentar(nome) {
    console.log("ola, " + nome );
}
cumprimentar("bruna"); 

//3
let mostrarMensagem = function (){
    console.log("vc é linda")
}
mostrarMensagem()

//4
const mult = (a,b) => {
    return a * b
}
console.log(mult(3,2))

//5
let botao = document.getElementById("botao");
let mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {
    mensagem.innerText = "texto alterado com js";
})

//6
function mudarFundo() {
    document.getElementById("corpo").style.backgroundColor = "blue"
}

//7
function add(){
    let li = document.createElement("li");
    li.textContent = "Banana";
    document.getElementById("lista").appendChild(li);
}

//8
function remover(){
    let paragrafo = document.getElementById("paragrafo")
    paragrafo.remove()
}

//9
let titulo = document.getElementById("titulo")
let texto1 = document.getElementById("texto1")
function mudarEstilo(){
    titulo.style.color = "green"
    titulo.style.fontSize = "35px"
    texto1.style.color = "blue"
    texto1.style.fontSize = "20px"
}

//10
function mostrarTexto(){
    let text = document.getElementById("text").value
    document.getElementById("resposta").innerText = text
}

//11
function textoMudado() {
    document.getElementById("botaomudaTexto").innerText = "Você passou o mouse!"
}

//12
document.getElementById("btnEsconder").addEventListener("dblclick", function() {
  document.getElementById("textoEsconder").style.display = "none"
})

//13
document.getElementById("btnFonte").addEventListener("click", function() {
  let tamanhoAleatorio = Math.floor(Math.random() * (40 - 10 + 1)) + 10
  document.getElementById("textoFonte").style.fontSize = tamanhoAleatorio + "px"
});

















