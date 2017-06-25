class FormCreator {

  constructor (data) {
    let form = document.querySelector("#form");
    const components = this.getComponents(data);
    this.insertFields(components)
  }

  getComponents(jsonData) {
    let fields = jsonData.map(function(data){
      let input = document.createElement('input');
      let p = document.createElement('p');

      input.type = data.type;
      input.name = data.name;
      input.id = data.id;
      input.className = 'input';
      input.placeholder = data.placeholder;

      const div = document.createElement('div');
      div.className = "inputWrapper";
      div.appendChild(input);
      div.appendChild(p);

      if (data.id === "txtFullname") {
        p.className = "nameErrorMessage";
      }

      if (data.id === "txtCPF") {
        p.className = "cpfErrorMessage";
      }

      if (data.id === "txtPhone") {
        p.className = "phoneErrorMessage";
      }

      if (data.id === "txtAddress") {
        p.className = "addressErrorMessage";
      }

      if (data.id === "uplImage") {
      let label = document.createElement('label');
        label.className = 'labelFile';
        label.setAttribute("for", "uplImage");
        label.innerHTML='Selecione o arquivo';
        div.appendChild(label);
        p.className = "imageErrorMessage";
      }

      if (data.id === "btnSave") {
        input.className += " btnSave";
      }

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
