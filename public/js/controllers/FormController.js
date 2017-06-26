class FormController {

  constructor() {
    const $ = document.querySelector.bind(document);

  }

  validateName(name) {
    const $ = document.querySelector.bind(document);

    if (name === '') {
      $('#txtFullname').className = 'inputError';
      $('.nameErrorMessage').innerHTML = "O campo nao pode ser vazio";
      return false;
    }
    $('.nameErrorMessage').innerHTML = "";
    $('#txtFullname').classList.remove("inputError");
    $('#txtFullname').className = 'input';
    return name;
  }

  validateCpf(cpf) {
    const $ = document.querySelector.bind(document);
    const Regex = /^([0-9]{3}\.){2}([0-9]{3}-)([0-9]{2})$/;

    if (cpf === '') {
      $('#txtCPF').className = 'inputError';
      $('.cpfErrorMessage').innerHTML = "O campo não pode ser vazio";
      return false;
    }
    if(cpf === "000.000.000-00"){
      $('#txtCPF').className = 'inputError';
      $('.cpfErrorMessage').innerHTML = "Os valores não podem ser zerados";
      return false;
    }
    if (!Regex.test(cpf)) {
      $('#txtCPF').className = 'inputError';
      $('.cpfErrorMessage').innerHTML = "Formato invalido, ensira xxx.xxx.xxx-xx";
      return false;
    }
    $('#txtCPF').className = 'input';
    $('.cpfErrorMessage').innerHTML = "";
    return cpf;

  }

  validatePhone(phone) {
    const $ = document.querySelector.bind(document);

    const phoneRegex = /^(\(11\) [9][0-9]{4}-[0-9]{4})|(\(1[2-9]\) [5-9][0-9]{3}-[0-9]{4})|(\([2-9][1-9]\) [5-9][0-9]{3}-[0-9]{4})$/;

    if (phone === "") {
      $('#txtPhone').className ='inputError';
      $('.phoneErrorMessage').innerHTML = "O campo não pode ser vazio";
      return false;
    }
    if (phone === "00000-0000") {
      $('#txtPhone').className ='inputError';
      $('.phoneErrorMessage').innerHTML = "Os valores não podem ser zerados";
      return false;
    }
    if (!phoneRegex.test(phone)) {
      $('#txtPhone').className ='inputError';
      $('.phoneErrorMessage').innerHTML = "Formato invalido, tente (xx) xxxxx-xxxx ou (xx) xxxx-xxxx";
      return false;
    }
    $('#txtPhone').className ='input';
    $('.phoneErrorMessage').innerHTML = "";
    return phone;
  }

  validateAddress(address) {
    const $ = document.querySelector.bind(document);

    if (address === '') {
      $('#txtAddress').className = 'inputError';
      $('.addressErrorMessage').innerHTML = "O campo não pode ser vazio";
      return false;
    }
    $('.addressErrorMessage').innerHTML = "";
    $('#txtAddress').classList.remove("inputError");
    $('#txtAddress').className = 'input';
    return address;
  }

  validateFile(file) {
    const $ = document.querySelector.bind(document);
    if (file === '') {
      $('.imageErrorMessage').innerHTML = "O campo 'Selecione o arquivo' não pode ser vazio";
      return false;
    }
    $('.imageErrorMessage').innerHTML = "";
    return file;
  }

  clearForm() {
    document.querySelector("#form").reset();
    document.querySelector('#txtFullname').focus();
  }

  addValidateUserToApi(name,cpf,phone,address,file) {
    let userArray = [];
    let newArray = [];

    userArray.push(name,cpf,phone,address,file);
    userArray.forEach(function(item) {

      if (item === false) {
        return;
      }
      else {

        newArray.push(item)

        if (newArray.length === 5) {
          let user = new User(newArray[0],newArray[1],newArray[2],newArray[3],newArray[4]);

          const requestInfo = {
            method:'POST',
            body:JSON.stringify(user),
            headers:new Headers({
                    'Content-type' : 'application/json'
            })
          };

          fetch('/newUser',requestInfo)
          .then(response => {
            if (response.ok) {
              return response.text();
            } else {
              throw new Error('não foi possível salvar o usuario');
            }
          }).then(user => {
              let listUser = new ListUser()
              listUser.addUser(user);
          })
          .catch(error => {
              console.log(error);
          });
        }
      }
    });
  };

  checkUserToApi(event) {
    event.preventDefault();

    const name = document.querySelector('#txtFullname').value;
    const nameValid = this.validateName(name);

    const cpf = document.querySelector('#txtCPF').value;
    const cpfValid = this.validateCpf(cpf);

    const phone = document.querySelector('#txtPhone').value;
    const phoneValid = this.validatePhone(phone);

    const address = document.querySelector('#txtAddress').value;
    const addressValid = this.validateAddress(address);

    const file = document.querySelector('#uplImage').value
    const fileValid = this.validateFile(file);

    this.addValidateUserToApi(nameValid,cpfValid,phoneValid,addressValid,fileValid);

    this.clearForm();
  }


}
