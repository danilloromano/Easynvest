class User {


  constructor(name,cpf,telephone,address) {

          this._name = name;
          this._cpf = cpf;
          this._telephone = telephone;
          this._address = address;
          Object.freeze(this);
  }


      get name() {
          return this._name;
      }

      get cpf() {
          return this._cpf;
      }

      get telephone() {
          return this._telephone;
      }

      get address() {
          return this._address;
      }


}
