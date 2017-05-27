(function() {
  'use strict';
  var elemento = document.getElementsByTagName('a');
  // var selectAtributo = elemento.getAttribute("href");
  var selectAtributo = [];

  for (var i = 0; i < elemento.length; i++) {
    selectAtributo.push(elemento[i].getAttribute("href"));
  }

  var todosElementos = [];
  var elementoSection = document.getElementsByTagName("section");

  for (var i = 0; i < elementoSection.length; i++) {
    todosElementos.push(elementoSection[i]);
  }

  var bodyTop = document.getElementsByTagName('body');

  var offSetTopElementos = [];

  for (var i = 0; i < todosElementos.length; i++) {
    offSetTopElementos.push(todosElementos[i].offsetTop);
  }



  console.log(offSetTopElementos);
  console.log(todosElementos);
  console.log(selectAtributo);
}());
