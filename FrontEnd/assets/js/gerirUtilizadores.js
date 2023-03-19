/**
 * Grupo: JuriTech
 * Disciplina :Pw
 */

//#region Objetos

let  insertPassword1 = document.getElementById("password1");
let  insertPassword2 = document.getElementById("password2");
let insertName = document.getElementById("name");
let createButton = document.getElementById("create");
let insertEmail = document.getElementById("email");
let termosCondicoes = document.getElementById("terms");

let url = "https://localhost:7180/api/Utilizador";
let urlDelete = "https://localhost:7180/api/Utilizador"

 var user = {
    id: "",
    name:"",
    email:"",
    password1:"",
    password2:""
};

//#endregion

/**
 * Captura o email digitado
 */
insertEmail.addEventListener("keyup", function() {
    user.email = insertEmail.value;
 });
 
/** 
 * Captura o nome digitado
*/
 insertName.addEventListener("keyup", function() {
    user.name = insertName.value;
 });

 /**
  * Captura a Password digitada
  */
 insertPassword1.addEventListener("keyup", function() {
    user.password1 = insertPassword1.value;
 });

 /**
  * Captura a segunda Password digitada
  */
 insertPassword2.addEventListener("keyup", function() {
    user.password2 = insertPassword2.value;
 });
 /**
  * Cria utilizador
  */
 createButton.addEventListener("click",function(){
    if(termosCondicoes.checked == true)
        CreateUser(user.name,user.email, user.password1, user.password2);
    else
        alert("Concordar com Termos e Condições.")
});

/**
 * Verifica Senhas
 */
function ComparePassword(password1, password2) {
    if(password1 === password2) return password2;
    else return "";
}

/**
 * Verifica Senhas
 */
 function VerificaNuloEmail(item){
    if(item) 
        return item;
    else {
        alert("Inserir email")
        return item;
    }
}

/**
 * Verifica Senhas
 */
 function VerificaNuloNome(item){
    if(item) 
        return item;
    else {
        alert("Inserir Nome")
        return item;
    }
}
/**
 * Função que cria um utilizador
 * @param {*} url 
 * @param {*} nome 
 * @param {*} email 
 * @param {*} password 
 */
function CreateUser(nome, email, password1, password2) { fetch(url,
    {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
    
        body: JSON.stringify({
            nome: VerificaNuloNome(nome),
            email:VerificaNuloEmail(email),
            Password:  ComparePassword(password1, password2)  
    })

})
    .then(res=> {
        if(res.ok){
            alert("Conta criada")
            window.open("index.html", "_self")
        }
        else if(password1 != password2){ 
            alert("Senhas diferentes.")
        }
        else{
           
            alert("Falhou na criação da conta, tente um email diferente ou análise os seus dados.")
        }
        res.json()
})
    .catch(error=>console.log('ERROOR'))
}

/**
 * Função que elimina utilizador
 * @param {} url 
 * @param {*} id 
 */
function DeleteUser(url, id){ fetch(url,{
    method: "DELETE",
    headers: {
        'Content-Type':'application/json'
    },
})
.then(res=>{
    if(res.ok){
        console.log("Deleted")
    }
    else{
        console.log("Not Deleted")
    }
    res.json()
})
.catch(error=>console.log("ERROR"))
}

/**
 * Função para buscar utilizadores
 * @param {*} url 
 */
function GetUser(url){
    fetch(url)
    .then(function(response){
        return response.json()
    }).then(function(data) {
        console.log(data)
    })
}

 /**
 * Função que mostra todos os utilizadores
 * @param {*} url 
 */
function GetUsers(url){
    fetch(url)
    .then(function(response){
        return response.json()
    }).then(function(data) {
        console.log(data)
    })
}



GetUsers(url);