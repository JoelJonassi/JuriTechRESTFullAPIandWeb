/**
 * Team: JuriTech
 * Disciplina :Pogramação Eb
 * Nr: 
 */

 let url = "https://localhost:7180/api/Tema/1";
 let urlDelete = "https://localhost:7180/api/Tema"

/**
 * Função que cria um Tema
 * @param {*} url 
 * @param {*} nome 
 * @param {*} email 
 * @param {*} password 
 */
function CriarTema(nrProcesso, idTipo, nome, valor, notas, dataEntrada){ fetch(url,
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
            alert("Criado")
        }
        else{
            console.log("Não Criado")
        }
        res.json()
})

    .then(data=> console.log(data))
    .catch(error=>console.log('ERROR'))
}


/**
 * Função que elimina Tema
 * @param {} url 
 * @param {*} id 
 */
function DeleteTema(url, nrProcesso){ fetch(url,{
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
 * Função que mostra todos os temas
 */
function GetTema(url){
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
 * Mostra temas na tabela
 */
function tabela(element){
    
    var table = document.getElementById("tabela");
    var row = table.insertRow();
    
    let cell = row.insertCell();
    var newText = document.createTextNode(element.nome);
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
 * Função que mostra uma tela para editar tema
 */
  function editWindow(){
    window.open("/painel/temas/editarTema.html", "_self")
}






GetTema(url);






