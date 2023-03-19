/**
 * Grupo: JuriTech
 * Disciplina :Pw
 */

//#region Objetos

let insertPassword= document.getElementById("password");
let insertEmail = document.getElementById("email");
let loginButton = document.getElementById("login");

 var user = {
    id: "",
    name:"",
    email:"",
    password:""
};

//#endregion


/**
 * Captura o email digitado
 */
insertEmail.addEventListener("keyup", function() {
    user.email = insertEmail.value;
 });
 
 /**
  * Captura a Password digitada
  */
 insertPassword.addEventListener("keyup", function() {
    user.password = insertPassword.value;
 });


/**
 * Iniciar a sessão do Utilizador 
 * email: antonio@juritech.pt senha: 789
 * ana@juritech.pt senha: qwe
 * alfredo@juritech.pt senha: asd
 * joelfilgueiras@live.com.pt senha:zxc
 * dadostestes@juritech.pt senha: testes123
 */
loginButton.addEventListener("click", function(){ 
    console.log(user.email.value);
  login(`https://localhost:7180/api/Utilizador/${user.email}/${user.password}`);
});


/**
 * login
 * @param {*} url 
 */
function login(url){
    fetch(url)
    .then(function(response){
        return response.json();
    }).then(function(resp) {   
            alert(`Bem Vindo a JuriTech ${resp.nome}.`)
            window.open('painel/resumo/index.html', '_self');
    }).catch(function(){
        alert("Verifique o seu email ou password") 
    })
}

/**
 * Função que compara as passwords no processo de criar conta
 * @param {} password1 
 * @param {*} password2 
 * @returns 
 */
function ComparePassword(password1, password2) {
    if(password1 === password2) return password1;
    else return "";
}
/**
 * Função que cria um utilizador
 * @param {*} url 
 * @param {*} nome 
 * @param {*} email 
 * @param {*} password 
 */
function CreateUser(nome, email, password1, password2){ fetch(url,
    {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            Password: ComparePassword(password1, password2)
        })
    })
    .then(res=> {
        if(res.ok){
           alert("Conta criada")
        }
        else{
            console.log("Falha ao criar conta")
        }
        res.json()
})
    .catch(error=>console.log("Falha ao criar conta"))
}

/**
 * Função que elimina utilizador
 * @param {} url 
 * @param {*} id 
 */
function DeleteUser(url){ fetch(url,{
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
.then(data=> console.log(data))
.catch(error=>console.log("ERROR"))
}



