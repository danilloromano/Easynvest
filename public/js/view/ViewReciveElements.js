class ViewReciveElements {

  reciveElements() {
    fetch('https://private-da937a-izitest1.apiary-mock.com/fields')
      .then(response => response.json()
        .then(data => {
          let formCreator = new FormCreator(data);
          let maps = new Maps();
          setTimeout(maps.inicializeInputAutocomplete(), 5000);
        }))
    .catch(function(error) {
      console.log(error);
    });
  }

}
