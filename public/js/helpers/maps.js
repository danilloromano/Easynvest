class Maps {

  constructor() {

  }

  inicializeInputAutocomplete(){
    const input = /** @type {!HTMLInputElement} */(document.getElementById('txtAddress'));
    const autocomplete = new google.maps.places.Autocomplete(input);
  }

}
