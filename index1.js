let listaLogin = buscarDados("usuarios");

const formulario = document.getElementById("login");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  const usuarioEncontrado = listaLogin.find(
    (valor) => valor.email === email && valor.password === password
  );

  if (!usuarioEncontrado) {
    alert("Usuário ou senha estão incorretos");

    return;
  } else {
    guardarDados("usuarioLogado", usuarioEncontrado.email);
    window.location.href = "./index3.html";
  }
});

function guardarDados(chave, valor) {
  const valorJSON = JSON.stringify(valor);
  localStorage.setItem(chave, valorJSON);
}

function buscarDados(chave) {
  const dadosJSON = localStorage.getItem(chave);
  if (dadosJSON) {
    const dadosConvertidos = JSON.parse(dadosJSON);
    return dadosConvertidos;
  } else {
    return {};
  }
}

