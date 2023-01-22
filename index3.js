const formularioRecados = document.
    getElementById('formularioRecados')

 

const tBody = document.getElementById('meus-recados')
let recadosSalvos= JSON.parse(localStorage.getItem('recadosSalvos')|| [])

function salvarRecados(event) {
    event.preventDefault()

    const recados = {
        descricao: formularioRecados.descricao.value,
        detalhamento: formularioRecados.detalhamento.value
    }

    const valorEmJson = JSON.stringify(recados)
    const valorConvertidoEmJson = JSON.parse(valorEmJson)

        recadosSalvos.push(recados)

    localStorage.setItem('recadosSalvos', JSON.stringify(recadosSalvos))

    formularioRecados.reset()
    mostrarRecadosNoHtml()
}

function mostrarRecadosNoHtml() {
    tBody.innerHTML = ''
  

    recadosSalvos.forEach((valor, index) => {

        tBody.innerHTML += `
        
        
        <tr id="${index}">
        <td>${index + 1}</td>
        <td>${valor.descricao}</td>
        <td>${valor.detalhamento}</td>

        <td>
        <button onclick="apagar(${index})">Apagar</button>
        </td>

        <td>
        <button onclick="editar(${index})">Editar</button>
        </td>
        
        </tr>
        
        
        `
    })
   
}
function apagar(indice) {
    recadosSalvos.splice(indice, 1)
    localStorage.setItem('recadosSalvos', JSON.stringify(recadosSalvos))
    mostrarRecadosNoHtml()
}


function editar(indice){
    formularioRecados.descricao.value = recadosSalvos[indice].descricao
    formularioRecados.detalhamento.value = recadosSalvos[indice].detalhamento
    formularioRecados.Salvar.setAttribute("onclick", `salvarEdicao(${indice})`)

}

function salvarEdicao(indice){
    recadosSalvos[indice].descricao = formularioRecados.descricao.value
    recadosSalvos[indice].detalhamento = formularioRecados.detalhamento.value
    localStorage.setItem('recadosSalvos', JSON.stringify(recadosSalvos))
    formularioRecados.Salvar.setAttribute("onclick", `salvarRecados(event)`)
    mostrarRecadosNoHtml()
}




function sairDaAplicacao(){
    
    localStorage.removeItem(formularioRecados)
    window.location.href="./index1.html"
}

setTimeout(()=>{
    mostrarRecadosNoHtml()
})
