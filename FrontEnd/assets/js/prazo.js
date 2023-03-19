/**
 * Team: JuriTech
 * Disciplina :Pogramação Eb
 * Nr: 
 */

 let url = "https://localhost:7180/api/Prazo/2";
 let urlDelete = "https://localhost:7180/api/Prazo" 

/**
 * Função que cria um prazo
 * @param {*} url 
 * @param {*} nome 
 * @param {*} email 
 * @param {*} password 
 */
function CriarPrazo(nrProcesso, idTipo, nome, valor, notas, dataEntrada){ fetch(url,
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
 * Função que elimina prazo
 * @param {} url 
 * @param {*} id 
 */
function DeletePrazo(url, nrProcesso){ fetch(url,{
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
 * Função que mostra todos os prazos
 * @param {*} url 
 */
function GetPrazo(url){
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
 * Mostra prazos na tabela
 */
function tabela(element){

    var table = document.getElementById("tabela");
    var row = table.insertRow();
    
    let cell = row.insertCell();
    var newText = document.createTextNode(element.idPrazoCodigo);
    cell.appendChild(newText);

    cell = row.insertCell();
    newText = document.createTextNode(element.nrProcesso);
    cell.appendChild(newText);
   
    cell = row.insertCell();
    newText = document.createTextNode(element.DataInicial);
    cell.appendChild(newText);

    cell = row.insertCell();
    newText = document.createTextNode(element.DataFinal);
    cell.appendChild(newText);

    cell = row.insertCell();
    newText = document.createTextNode(element.NrArtigo);
    cell.appendChild(newText);

    cell = row.insertCell();
    cell.innerHTML = `<a class='btn btn-success text-white'>
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
    window.open("/painel/prazos/editarPrazo.html", "_self")
}



GetPrazo(url);






