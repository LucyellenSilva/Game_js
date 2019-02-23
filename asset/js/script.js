function addBoll() 
{
    var boll = document.createElement("div");
    boll.setAttribute("class", "boll");
    var x =  Math.floor(Math.random() * 500);
    var y =  Math.floor(Math.random() * 400);

    boll.setAttribute("style", "left:" + x +"px;top:"+y+"px;background-color:" + gera_cor() +";");
    boll.setAttribute("onClick", "estourar(this)");

    document.body.appendChild(boll);
}

function gera_cor()
{
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';

    for (var i = 0; i < 6; i++ ) {
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    
    return cor;
}

function estourar(objeto) 
{
    document.body.removeChild(objeto);
}

function start() 
{
   setInterval(addBoll, 500);
}