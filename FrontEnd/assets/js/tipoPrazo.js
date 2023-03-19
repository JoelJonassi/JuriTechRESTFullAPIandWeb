/**
 * Grupo: JuriTech
 * Disciplina :Pw
 */

//#region Objetos

/*let  inserirTipo = document.getElementById("password");
let inserirValor = document.getElementById("name");
let inserirNome = document.getElementById("name");
let inserirNotas = document.getElementById("notas");
let inserirData = document.getElementById("dataEntrada");
let createButton = document.getElementById("button");
let insertEmail = document.getElementById("email");*/

let url = "https://localhost:7180/api/TipoPrazo";
let urlDelete = "https://localhost:7180/api/TipoPrazo"

var processo = {
    nrProcesso: 1,
    idTipo: 2,
    idUtilizador: 1,
    valor: 20.5,
    nome: "joel",
    notas: "dd",
    dataEntrada: "dd"
};

var tema = {
    id:  1
};

var artigo = {
    id: 1
};

//#endregion


/**
 * Função que cria um utilizador
 * @param {*} url 
 * @param {*} nome 
 * @param {*} email 
 * @param {*} password 
 */
function CriarTipoPrazo(nrProcesso, idTipo, nome, valor, notas, dataEntrada){ fetch(url,
    {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            nrProcesso: nrProcesso,
            idTipo: idTipo,
            nome: nome,
            valor: valor,
            notas: notas,
            dataEntrada: dataEntrada
        })
    })
    .then(res=> {
        if(res.ok){
            alert("Processo criado")
        }
        else{
            console.log("Nao Criado")
        }
        res.json()
})

    .then(data=> console.log(data))
    .catch(error=>console.log('ERROOR'))
}

/**
 * Função que elimina utilizador
 * @param {} url 
 * @param {*} id 
 */
function DeleteTipoPrazo(url, nrProcesso){ fetch(url,{
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



 /**
 * Função que mostra todos os processos
 * @param {*} url 
 */
function GetTipoPrazo(url){
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        return data.map(function (data){
            console.log(data);
           tabela(data);
           
        })
    });
}


/**
 * Função que mostra tipoPrazo na tabela
 */
function tabela(element){

    var table = document.getElementById("tabela");
    var row = table.insertRow();
    
    let cell = row.insertCell();

    var newText = document.createTextNode(element.id);
    cell.appendChild(newText);
   
    cell = row.insertCell();
    newText = document.createTextNode(element.nome);
    cell.appendChild(newText);

    
    var cell5 = row.insertCell();
   
    cell5.innerHTML = `<a class='btn btn-success text-white'>
                <i class='far fa-edit' onclick='editWindow()'></i></a>
                &nbsp;&nbsp;
                <a class='btn btn-danger text-white'  style='cursor:pointer;'  onclick='deleteRow(this)'> <i
                class='far fa-trash-alt'></i></a>`;
}

/**
 * Função que apaga uma linha ana tabela
 * @param {} row 
 */
function deleteRow(row) {
    var toDeleteIndex = row.parentNode.parentNode.rowIndex;
    document.getElementById("tabela").deleteRow(toDeleteIndex);
  }

  /**
 * Função que mostra tela para editar prazo
 */
function editWindow(){
    window.open("/painel/tipoPrazo/editarTipoPrazo.html", "_self")
}


GetTipoPrazo(url);






