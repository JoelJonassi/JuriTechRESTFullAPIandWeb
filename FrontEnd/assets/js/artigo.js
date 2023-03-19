/**
 * Grupo: JuriTech
 * Disciplina :Pw
 */

/**
 * Função que cria um artigo
 * @param {*} url 
 * @param {*} nome 
 * @param {*} email 
 * @param {*} password 
 */
function CriarArtigo(nrProcesso, idTipo, nome, valor, notas, dataEntrada){ fetch(url,
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
 * Função que elimina artigo
 * @param {} url 
 * @param {*} id 
 */
function DeleteArtigo(url){ fetch(url,{
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
 * Função que mostra artigos
 * @param {*} url 
 */
function GetArtigo(url){
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
 * Mostra artigos na tabela
 */
function tabela(element){

    var table = document.getElementById("tabela");
    var row = table.insertRow();
    
    let cell = row.insertCell();
    var newText = document.createTextNode(element.idCodigo);
    cell.appendChild(newText);

    cell = row.insertCell();
    newText = document.createTextNode(element.nrArtigo);
    cell.appendChild(newText);
   
    cell = row.insertCell();
    newText = document.createTextNode(element.nome);
    cell.appendChild(newText);

    cell = row.insertCell();
    newText = document.createTextNode(element.dias);
    cell.appendChild(newText);

    cell = row.insertCell();
    newText = document.createTextNode(element.meses);
    cell.appendChild(newText);

    cell = row.insertCell();
    newText = document.createTextNode(element.anos);
    cell.appendChild(newText);

    cell = row.insertCell();
    newText = document.createTextNode(element.ferias);
    cell.appendChild(newText);

    cell = row.insertCell();
    newText = document.createTextNode(element.diasNaoUteis);
    cell.appendChild(newText);

    cell = row.insertCell();
   
    cell.innerHTML = `<a class='btn btn-success text-white'>
                <i class='far fa-edit' onclick='editWindow()'></i></a>
                &nbsp;&nbsp;
                <a class='btn btn-danger text-white'   style='cursor:pointer;'  onclick='deleteRow(this)'> <i
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
 * Função que mostra tela para editar artigo
 */
function editWindow(){
        window.open("/painel/artigos/editarArtigo.html", "_self")
}

let url = "https://localhost:7180/api/Artigo/1";
let urlDelete = "https://localhost:7180/api/Artigo"

GetArtigo(url);






