$(".agregar").click(function(e)
{
  e.preventDefault();
  let texto=$("#newText").val();
  $("#newText").val("");
  let item=$(
  `<div id="item">
    <li>
      <p id="texto">${texto}</p>
      <button id="checar">check</button>
      <button id="borrar">delete</button>
    </li>
  </div>`);


$(".Lista").append(item);
}
);

$(".Lista").on('click', '#borrar', function()
{
  let item=$(this).parent().parent();
  item.remove();
}
);

$(".Lista").on('click', '#checar', function()
{
  let texto=$(this).parent().children("#texto");
  texto.toggleClass("listo");
  
  if (texto.hasClass("listo"))
  { 
    texto.css("text-decoration", "line-through");
  }   
  else
  {
    texto.css("text-decoration", "none");
  }
}
);

