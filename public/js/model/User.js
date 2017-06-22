class User {


  constructor(name,cpf,telephone,address,complement) {

          this._name = name;
          this._cpf = cpf;
          this._telephone = telephone;
          this._address = address;
          this._complement = complement;
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

      get complement() {
          return this._complement;
      }

}
