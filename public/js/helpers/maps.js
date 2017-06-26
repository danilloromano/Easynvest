class Maps {

  inicializeInputAutocomplete(){
    const input = (document.getElementById('txtAddress'));
    const autocomplete = new google.maps.places.Autocomplete(input);
  }

}
