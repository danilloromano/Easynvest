

class FormController {

  constructor() {
    const $ = document.querySelector.bind(document);

  }

  reciveData(){
    fetch('https://private-da937a-izitest1.apiary-mock.com/fields')
      .then(response => response.json()
        .then(data => {
          console.log(data);
          return data;
        }))
    .catch(function(error) {
      console.log(error);
    });
  }

  validateName(name) {
    const $ = document.querySelector.bind(document);

    if (name === '') {
      $('#txtFullname').className = 'inputError';
      $('.nameErrorMessage').innerHTML = "O compo nao pode ser vazio";
      return;
    }
    return name;
  }

  validateCpf(cpf) {
    const $ = document.querySelector.bind(document);
    const Regex = /^([0-9]{3}\.){2}([0-9]{3}-)([0-9]{2})$/;

    if (cpf === '') {
      $('#txtCPF').className = 'inputError';
      $('.cpfErrorMessage').innerHTML = "O compo nao pode ser vazio";
      return;
    }
    if(cpf === "000.000.000.00"){
      $('#txtCPF').className = 'inputError';
      $('.cpfErrorMessage').innerHTML = "Os valores nao podem ser zerados";
      return;
    }
    if (!Regex.test(cpf)) {
      $('#txtCPF').className = 'inputError';
      $('.cpfErrorMessage').innerHTML = "Formato invalido, tente xxx.xxx.xxx-xx";
      return;
    }
    console.log(cpf);
    return cpf;

  }

  validatePhone(phone) {
    const $ = document.querySelector.bind(document);

    const phoneRegex = /^(\(11\) [9][0-9]{4}-[0-9]{4})|(\(1[2-9]\) [5-9][0-9]{3}-[0-9]{4})|(\([2-9][1-9]\) [5-9][0-9]{3}-[0-9]{4})$/;

    if (phone === "") {
      $('#txtPhone').className ='inputError';
      $('.phoneErrorMessage').innerHTML = "O compo nao pode ser vazio";
      return ;
    }
    if (phone === "(00)00000-0000") {
      $('#txtPhone').className ='inputError';
      $('.phoneErrorMessage').innerHTML = "Os valores nao podem ser zerados";
      return;
    }
    if (!phoneRegex.test(phone)) {
      $('#txtPhone').className ='inputError';
      $('.phoneErrorMessage').innerHTML = "Formato invalido, tente (xx) xxxxx-xxxx ou (xx) xxxx-xxxx";
      return;
    }
    return phone;
  }

  validateAddress(address) {
    const $ = document.querySelector.bind(document);

    if (address === '') {
      $('#txtAddress').className = 'inputError';
      $('.addressErrorMessage').innerHTML = "O compo nao pode ser vazio";
      return;
    }
    return address;
  }


  adiciona(event) {
    event.preventDefault();

    const name =  document.querySelector('#txtFullname').value;
    this.validateName(name);
    const cpf = document.querySelector('#txtCPF').value;
    this.validateCpf(cpf);
    const phone = document.querySelector('#txtPhone').value;
    this.validatePhone(phone);
    const address = document.querySelector('#txtAddress').value;
    this.validateAddress(address);


    // const $ = document.querySelector.bind(document);
    // let user = new User(
    //   $('#txtFullname').value,
    //   $('#txtCPF').value,
    //   $('#txtPhone').value,
    //   $('#txtAddress').value
    // );

    const $ = document.querySelector.bind(document);
    let user = new User(
      name,
      cpf,
      phone,
      address
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
