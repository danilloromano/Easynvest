class Maps {

  constructor() {

  }

  inicializeInputAutocomplete(){
    const input = /** @type {!HTMLInputElement} */(document.getElementById('txtAddress'));
    console.log(input);
    const autocomplete = new google.maps.places.Autocomplete(input);
  }

}
