//aqui to criando uma variavel e pegando pra ela o elemento com id navbar-toggler
var navbarToggler = document.getElementById("navbar-toggler");
//aqui o mesmo mas com o id navbarNav
var navbarCollapse = document.getElementById("navbarNav");

//aqui eu uso a variavel que criei e coloco um evento que vai esconder as coisas do nav padrão sem responsividade
navbarCollapse.addEventListener("hidden.bs.collapse", function() {
  navbarToggler.classList.remove("navbar-toggler-open");
});

/*aqui uso a variável que criei também e adiciono um evento de click no botão hamburguer que faz abrir 
o mesmo menu que tem sem responsividade mas em uma caixinha com o fundo igual da navbar, e um if pra verificar se
tem a "show" que no caso significa mostrar, e quando clicar denovo, fecha a caixinha.
*/
navbarToggler.addEventListener("click", function() {
  if (navbarCollapse.classList.contains("show")) {
    navbarToggler.classList.remove("navbar-toggler-open");
  } else {
    navbarToggler.classList.add("navbar-toggler-open");
  }
});