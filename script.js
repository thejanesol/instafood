$("body").prepend(
    '<div class="nav-bar">' +
      '<div class="nav-link">'+
          '<ul>'+
              '<li><a href=""><img src="src/assets/img/logo.png" id="logo"</a></li>' +
              '<li><a href="">MENU PRINCIPAL</a></li>' +
              '<li><a href="">RECEITAS SALGADAS</a></li>'+
              '<li><a href="">RECEITAS DOCES</a></li>'+
          '</ul>'+
          '<a href="src/templates/cadastro.html"><button type="button" class="btn-vermelho"> SE INSCREVA </button></a>'+
      '</div>'+
  '</div>' +

  "<div class='vertical-bar'>" +
      "<div class='search-icon'>" +
          "<a href='/'><i class='fa fa-th-list'></i></a>" +
          "<a><i class='fa fa-search'></i></a>" +
          "<div class='search-icon'>" +
              "<ul>" +
                  "<li><a href='' target='_self'>RECEITAS <br>SALVAS</a></li>" +
                  "<li><a href='src/templates/criarreceita.html' target='_self'>POSTAR</a></li>" +
                  "<li><a href='src/templates/login.html' target='_self'>ENTRAR</a>" +
                  "</li>" +
              "</ul>" +
          "</div>" +
      "</div>" +
      "<div class='social-icons'>" +
          "<ul>" +
              "<li><i class='fab fa-facebook-f fa-2x icon-social'></i></li>" +
              "<li><i href='/' class='fab fa-twitter fa-2x icon-social'></i></li>" +
              "<li><i href='/' class='fab fa-pinterest fa-2x icon-social'></i></li>" +
              "<li><i href='/' class='fab fa-instagram fa-2x icon-social'></i></li>" +
          "</ul>" +
      "</div>" +
  "</div>"+
  "<div class='nav-bar'>"
)