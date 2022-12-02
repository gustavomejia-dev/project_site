const formulario = document.querySelector("#form");
const Inome = document.querySelector("#nome");
const Isobrenome = document.querySelector("#sobrenome");
const Iemail = document.querySelector("#email");
const Icelular = document.querySelector("#celular");
const Icidade = document.querySelector("#cidade");
const Iestado = document.querySelector("#estado");
const Iendereco = document.querySelector("#endereco");
function cadastrar(){
    fetch("http://localhost:8080/cadastrar",
        {   headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        method: "POST",
        body: JSON.stringify({
            nome:Inome.value,
            sobrenome:Isobrenome.value,
            email:Iemail.value,
            celular:Icelular.value,
            cidade:Icidade.value,
            estado:Iestado.value,
            endereco:Iendereco.value,
            })
        })
        .then(function(res){console.log(res)})
        .catch(function (res){console.log(res)})
            

};
function limpar() {
    Inome.value ="";
    Isobrenome.value = "";
    Iemail.value="";
    Icelular.value = "";
    Icidade.value = "";
    Iestado.value = "";
    Iendereco.value = "";

};
formulario.addEventListener('submit', function(event){
    event.preventDefault();
    cadastrar();
    limpar();
});