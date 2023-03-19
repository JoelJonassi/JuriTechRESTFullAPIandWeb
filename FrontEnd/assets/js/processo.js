/**
 * Team: JuriTech
 * Disciplina :Pogramação Eb
 * Nr: 
 */

 let url = "https://localhost:7180/api/Processo/1";
 let urlDelete = "https://localhost:7180/api/Processo"
 

//#region Objetos


var processo = {
    nrProcesso: 1,
    idTipo: 2,
    idUtilizador: 1,
    valor: 20.5,
    nome: "",
    notas: "",
    dataEntrada: ""
};



//#endregion


//#region testes
/*
/**
 * Captura o email digitado
 *//*
inserirNome.addEventListener("keyup", function() {
    processo.nome = inserirNome.value;
 });*/
 
/** 
 * Captura o nome digitado
*//*
inserirTipo.addEventListener("keyup", function() {
    processo.idTipo= inserirTipo.value;
 });
*/
 /**
  * Captura a Password digitada
  *//*
 inserirNotas.addEventListener("keyup", function() {
    processo.notas = inserirNotas.value;
 });

 inserirData.addEventListener("keyup", function() {
    processo.dataEntrada = inserirData.value;
 });
*/
 /**
  * Cria utilizador
  */
 /*
 createButton.addEventListener("click",function(){
  CriarProcesso(processo.nrProcesso, processo.idTipo, processo.nome, processo.valor, processo.notas);
});
*/
//#endregion


/**
 * Função que cria um processo
 * @param {*} url 
 * @param {*} nome 
 * @param {*} email 
 * @param {*} password 
 */
function CriarProcesso(nrProcesso, idTipo, nome, valor, notas, dataEntrada){ fetch(url,
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
 * Função que elimina processos
 * @param {} url 
 * @param {*} id 
 */
function DeleteProcesso(url, nrProcesso){ fetch(url,{
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
function GetProcessos(url){
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        return data.map(function (test){
           tabela(test);
        })
    });
}


/**
 * Mostra processos na tabela
 */
function tabela(element){

    var table = document.getElementById("tabela");
    var row = table.insertRow();
    
    let cell = row.insertCell();

    var newText = document.createTextNode(element.nrProcesso);
    cell.appendChild(newText);
   
    cell = row.insertCell();
    newText = document.createTextNode(element.nome);
    cell.appendChild(newText);

    cell = row.insertCell();
    newText = document.createTextNode(element.dataEntrada);
    cell.appendChild(newText);

    cell = row.insertCell();
    newText = document.createTextNode(element.valor+"€");
    cell.appendChild(newText);

    cell = row.insertCell();
    newText = document.createTextNode(element.notas);
    cell.appendChild(newText);
    console.log(element.nrProcesso);

    var cell5 = row.insertCell();
   
    cell5.innerHTML = `<a class='btn btn-success text-white' id="edit">
                <i class='far fa-edit' onclick = 'editWindow()'></i></a>
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
 * Função qeu mostra tela para editar processo
 */
function editWindow(){
    window.open("/painel/processos/editarProcesso.html", "_self")
}


GetProcessos(url);