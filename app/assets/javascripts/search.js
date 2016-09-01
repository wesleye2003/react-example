$(document).ready(function(){
  var portfolio = [];

  $('form#search-form').on('submit', function(event){
    event.preventDefault();
    var $formData = this.children[2].value.toUpperCase();
    $.get(`http://data.benzinga.com/rest/richquoteDelayed?symbols=${$formData}`, function(data){
      alert("data");
    });
  })
})
