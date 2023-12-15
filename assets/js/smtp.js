function enviarEmail() {
  // Pegue os valores do formulário
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  Email.send({
    SecureToken: "fa664229-d3ac-4c0d-a7b3-f242b68cae1e",
    Username: "ionan564@gmail.com",
    To: "ionan564@gmail.com", // Substitua pelo e-mail do destinatário
    From: "ionan564@gmail.com",
    Subject: "Assunto: Contato de " + name,
    Body: "Nome: " + name + "<br>Email: " + email + "<br>Mensagem: " + message,
  }).then(
    function (message) {
      // Aqui você pode fazer algo após o envio bem-sucedido, como exibir uma mensagem ao usuário
      alert("E-mail enviado com sucesso!");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    },
    function (error) {
      // Trate erros, como exibir uma mensagem de erro ao usuário
      alert("Erro ao enviar e-mail: " + error);
    }
  );
}
