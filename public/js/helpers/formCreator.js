class FormCreator {

  constructor (data) {
    let form = document.querySelector("#form");
    const components = this.getComponents(data);
    this.insertFields(components)
  }

  getComponents(jsonData) {
    let fields = jsonData.map(function(data){
      let input = document.createElement('input');
      input.type = data.type;
      input.name = data.name;
      input.id = data.id;
      input.className = 'input';
      input.placeholder = data.placeholder;

      const div = document.createElement('div');
      div.className = "inputWrapper";
      div.appendChild(input)

      return div;
    })
    return fields;
  }

  insertFields(fields){
      fields.forEach((item) => {
        form.appendChild(item);
    })
  }

}
