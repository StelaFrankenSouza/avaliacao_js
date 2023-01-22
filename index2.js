let listaUsuarios = buscarDados('usuarios')

const cadastro = window.document.getElementById("formularioCadastro");

cadastro.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const inputEmail = window.document.getElementById("email");

  const inputSenha1 = window.document.getElementById("senha1");

  const inputRepeteSenha1 = window.document.getElementById("repeteSenha1");

  const retorno = document.getElementById("retorno");

  if (inputSenha1.value !== inputRepeteSenha1.value) {
    retorno.innerHTML = '<p>As senhas não conferem</p>';

    setTimeout(() => {
      retorno.innerHTML = '';
    }, 2000);
    return;
  }

  const novoUsuario = {
    email: inputEmail.value,
    password: inputSenha1.value,
    recados: []
  };

  const existe = listaUsuarios.some(
    (valor) => valor.email === inputEmail.value
  );
  if (existe) {
    alert("Esse email cadastrado, já existe!");
    listaUsuarios = []
    return;
  }
  listaUsuarios.push(novoUsuario);

  guardarDados("usuarios", listaUsuarios);

  alert("Usuário cadastrado com sucesso!");

  cadastro.reset();
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
    return [];
  }
}
