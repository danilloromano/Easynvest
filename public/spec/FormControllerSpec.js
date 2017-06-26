
describe("FormController", function() {
  var controller, user;
  beforeEach(function() {
    controller = new FormController();
    user = new User();
    loadFixtures('form.html');
  });
  describe("validateName",function(){
    it("should return false if input is empty", function() {
      const name =  document.querySelector('#txtFullname');
      name.value = '';
      controller.validateName(name.value);

      expect(name.value).toEqual('');
      expect(name).toHaveClass('inputError');
      expect(controller.validateName(name.value)).toEqual(false);
    });

    it("should return name if input not empty", function() {
      const name =  document.querySelector('#txtFullname');
      name.value = 'Nelson';
      controller.validateName(name.value);

      expect(name.value).toEqual('Nelson');
      expect(name).not.toHaveClass('inputError');
      expect(name).toHaveClass('input');
      expect(controller.validateName(name.value)).toEqual(name.value);
    });
  });

  describe("validateAddress",function(){
    it("should return false if input is empty", function() {
      const address =  document.querySelector('#txtAddress');
      address.value = '';
      controller.validateAddress(address.value);

      expect(address.value).toEqual('');
      expect(address).toHaveClass('inputError');
      expect(controller.validateAddress(address.value)).toEqual(false);
    });

    it("should return address if input not empty", function() {
      const address =  document.querySelector('#txtAddress');
      address.value = 'Rua Nelson n221';
      controller.validateAddress(address.value);

      expect(address.value).toEqual('Rua Nelson n221');
      expect(address).not.toHaveClass('inputError');
      expect(address).toHaveClass('input');
      expect(controller.validateAddress(address.value)).toEqual(address.value);
    });
  });

  describe("validateFile",function(){
    it("should return false if input is empty", function() {
      const image =  document.querySelector('#uplImage');
      image.value = '';
      controller.validateFile(image.value);

      expect(image.value).toEqual('');
      expect(controller.validateFile(image.value)).toEqual(false);
    });
  });

  describe("validatePhone",function(){
    it("should return false if input is empty", function() {
      const phone = document.querySelector('#txtPhone');
      phone.value = '';
      controller.validatePhone(phone.value);

      expect(phone.value).toEqual('');
      expect(document.querySelector('.phoneErrorMessage').innerHTML).toEqual('O campo não pode ser vazio');
      expect(controller.validatePhone(phone.value)).toEqual(false);
    });

    it("should return phone if input is 00000-0000", function() {
      const phone =  document.querySelector('#txtPhone');
      phone.value = '00000-0000';
      controller.validatePhone(phone.value);

      expect(phone.value).toEqual("00000-0000");
      expect(phone).toHaveClass('inputError');
      expect(document.querySelector('.phoneErrorMessage').innerHTML).toEqual("Os valores não podem ser zerados");
      expect(controller.validatePhone(phone.value)).toEqual(false);
    });

    it("should return phone if validate regex", function() {
      const phone =  document.querySelector('#txtPhone');

      phone.value = '(11)96538-1923';
      controller.validatePhone(phone.value);

      expect(phone.value).toEqual('(11)96538-1923');
      expect(phone).toHaveClass('inputError');
      expect(document.querySelector('.phoneErrorMessage').innerHTML).toEqual("Formato invalido, tente (xx) xxxxx-xxxx ou (xx) xxxx-xxxx");
      expect(phone.value).not.toMatch(/^(\(11\) [9][0-9]{4}-[0-9]{4})|(\(1[2-9]\) [5-9][0-9]{3}-[0-9]{4})|(\([2-9][1-9]\) [5-9][0-9]{3}-[0-9]{4})$/);
      expect(controller.validatePhone(phone.value)).toEqual(false);
    });
    it("should return phone", function() {
      const phone =  document.querySelector('#txtPhone');

      phone.value = '(11) 96538-1923';
      controller.validatePhone(phone.value);

      expect(phone.value).toEqual('(11) 96538-1923');
      expect(phone).toHaveClass('input');
      expect(document.querySelector('.phoneErrorMessage').innerHTML).toEqual("");
      expect(controller.validatePhone(phone.value)).toEqual(phone.value);
    });
  });

  describe("validateCpf",function(){
    it("should return false if input is empty", function() {
      const cpf = document.querySelector('#txtCPF');
      cpf.value = '';
      controller.validateCpf(cpf.value);

      expect(cpf.value).toEqual('');
      expect(document.querySelector('.cpfErrorMessage').innerHTML).toEqual('O campo não pode ser vazio');
      expect(controller.validateCpf(cpf.value)).toEqual(false);
    });

    it("should return cpf if input is 000.000.000.00", function() {
      const cpf =  document.querySelector('#txtCPF');
      cpf.value = '000.000.000-00';
      controller.validateCpf(cpf.value);

      expect(cpf.value).toEqual('000.000.000-00');
      expect(cpf).toHaveClass('inputError');
      expect(document.querySelector('.cpfErrorMessage').innerHTML).toEqual("Os valores não podem ser zerados");
      expect(controller.validateCpf(cpf.value)).toEqual(false);
    });

    it("should return cpf if validate regex", function() {
      const cpf =  document.querySelector('#txtCPF');

      cpf.value = '40185861830';
      controller.validateCpf(cpf.value);

      expect(cpf.value).toEqual('40185861830');
      expect(cpf).toHaveClass('inputError');
      expect(document.querySelector('.cpfErrorMessage').innerHTML).toEqual("Formato invalido, ensira xxx.xxx.xxx-xx");
      expect(cpf.value).not.toMatch(/^([0-9]{3}\.){2}([0-9]{3}-)([0-9]{2})$/);
      expect(controller.validateCpf(cpf.value)).toEqual(false);
    });

    it("should return cpf", function() {
      const cpf =  document.querySelector('#txtCPF');

      cpf.value = '401.858.618-30';
      controller.validateCpf(cpf.value);

      expect(cpf.value).toEqual('401.858.618-30');
      expect(cpf).toHaveClass('input');
      expect(document.querySelector('.cpfErrorMessage').innerHTML).toEqual("");
      expect(controller.validateCpf(cpf.value)).toEqual(cpf.value);
    });
  });

  describe("checkUserToApi",function(){
    it("should prepare user to api on validate", function() {
      var event = {type: "submit",preventDefault:function(){}};
      const name =  document.querySelector('#txtFullname');
      const cpf =  document.querySelector('#txtCPF');
      const phone =  document.querySelector('#txtPhone');
      const image =  document.querySelector('#uplImage');
      const address =  document.querySelector('#txtAddress');

        spyOn(controller,"validateName");
        spyOn(controller,"validateCpf");
        spyOn(controller,"validatePhone");
        spyOn(controller,"validateAddress");
        spyOn(controller,"validateFile");
        spyOn(controller,"addValidateUserToApi");
        spyOn(controller,"_limpaFormulario");

        controller.checkUserToApi(event);

      expect(controller.validateName).toHaveBeenCalledWith(name.value);
      expect(controller.validateCpf).toHaveBeenCalledWith(cpf.value);
      expect(controller.validatePhone).toHaveBeenCalledWith(phone.value);
      expect(controller.validateAddress).toHaveBeenCalledWith(address.value);
      expect(controller.validateFile).toHaveBeenCalledWith(image.value);
      expect(controller.addValidateUserToApi).toHaveBeenCalled();
      expect(controller.clearForm).toHaveBeenCalled();
    });
  });

});
