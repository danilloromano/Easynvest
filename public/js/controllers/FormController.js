

class FormController {

  constructor() {
    const $ = document.querySelector.bind(document);
  }

  validateCpf(cpf) {
    const cpfRegex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;

    if (cpf === '') {
      $('#txtCPF').className('error');
      $('#errorMessage').innerHTML = "O compo nao pode ser vazio";
      return;
    }
    if(cpf === "000.000.000.00"){
      $('#txtCPF').className('error');
      $('#errorMessage').innerHTML = "Os valores nao podem ser zerados";
      return;
    }
    if (!cpfRegex.test(cpf)) {
      $('#txtCPF').className('error');
      $('#errorMessage').innerHTML = "Formato invalido, tente xxx.xxx.xxx.xx";
      return;
    }
    return cpf;
  }

  validatePhone(phone) {

    const phoneRegex = /(\(11\) [9][0-9]{4}-[0-9]{4})|(\(1[2-9]\) [5-9][0-9]{3}-[0-9]{4})|(\([2-9][1-9]\) [5-9][0-9]{3}-[0-9]{4})/;

    if (phone === "") {
      $('#txtPhone').className('error');
      $('#errorMessage').innerHTML = "O compo nao pode ser vazio";
      return;
    }
    if (phone === "(00)00000-0000") {
      $('#txtPhone').className('error');
      $('#errorMessage').innerHTML = "Os valores nao podem ser zerados";
      return;
    }
    if (!phoneRegex.test(phone)) {
      $('#txtPhone').className('error');
      $('#errorMessage').innerHTML = "Formato invalido, tente (xx) xxxxx-xxxx ou (xx) xxxx-xxxx";
      return;
    }
    return phone;
  }

  adiciona(event) {
    event.preventDefault();

    let cpf = document.querySelector('#txtCPF').value;
    validateCpf(cpf);


    const $ = document.querySelector.bind(document);
    let user = new User(
      $('#txtFullname').value,
      $('#txtCPF').value,
      $('#txtPhone').value,
      $('#txtAddress').value
    );


      console.log(user);
        // this._criaUser();
        this._limpaFormulario();
    }


    _limpaFormulario() {
      document.querySelector('#txtFullname').value = "";
      document.querySelector('#txtCPF').value = "";
      document.querySelector('#txtPhone').value = "";
      document.querySelector('#txtAddress').value = "";
      document.querySelector('#txtFullname').focus();
    }


}
