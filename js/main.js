$(document).ready(function() {

if (window.location.href.indexOf('index') > -1) {


  //slider
  $('.bxslider').bxSlider({
    auto: true,
    autoControls: false,
    keyboardEnabled: false,
    stopAutoOnClick: false,
    pager: false,
    slideWidth: 1600,
    slideHeigth: 300
  });
}
//Post:
if (window.location.href.indexOf('index')>-1) {


var posts= [
  {
    title: 'Prueba de Titulo 1',
    date: moment().format("dddd Do MMMM YYYY"),
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  },
  {title: 'Prueba de Titulo 2',
  date: moment().format("dddd Do MMMM YYYY"),
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Prueba de Titulo 3',
      date: moment().format("dddd Do MMMM YYYY"),
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  },
  {title: 'Prueba de Titulo 4',
  date: moment().format("dddd Do MMMM YYYY"),
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];
console.log(posts);

posts.forEach((item, i) => {

var post=`
<article class="post">
  <h2>${item.title}</h2>
  <span class="fecha">Fecha de publiacion:${item.date} </span>
  <p> ${item.content}</p>
      <a href="#" class="vermas">Leer Mas</a>
</article>`;

console.log(post);

$("#posts").append(post);
});
}
//Selector de tema:

var greentheme=$('#greentheme');

$('.btn-green').click(function() {
  greentheme.attr("href","css/green.css");
});

$('.btn-red').click(function() {
  greentheme.attr("href","css/red.css");
});
  $('.btn-blue').click(function() {
    greentheme.attr("href","css/blue.css");
});

//scroll para arriba:

$('.subir').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  },500)
  return false;
});

//LOGIN FALSO
$('#frm').submit(function() {

var formname=$('#name').val();
localStorage.setItem("formname",formname);

});

var formname =localStorage.getItem("formname");

if (formname!=null && formname!= 'undefined') {
  var about_p= $('.about p');
  about_p.html("<strong> Bienvenido: "+formname+"</strong>");
  about_p.append("<a href='#' id='logout'>Cerrar Sesion</a>");


  $('.login').hide();

$('#logout').click(function() {
  localStorage.clear();
  location.reload();
});
}

//Acordeon:
if (window.location.href.indexOf('about')>-1) {

$('#acordeon').accordion();

}

//Reloj
if (window.location.href.indexOf('reloj')>-1) {

setInterval(function() {
  var reloj=moment().format("h:mm:ss");
  $('.reloj').html(reloj);
},1000);

}

if (window.location.href.indexOf('contacto')>-1) {


 $.validate({
   lang: 'es',
   errorMessagePosition: 'top',
 });

}
});
