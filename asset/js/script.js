function addBall() 
{
    var ball = document.createElement("div");
    ball.setAttribute("class", "boll");
    var x =  Math.floor(Math.random() * 500);
    var y =  Math.floor(Math.random() * 400);

    ball.setAttribute("style", "left:" + x +"px;top:"+y+"px;background-color:" + getColor() +";");
    ball.setAttribute("onClick", "estourar(this)");

    document.body.appendChild(ball);
}

function getColor()
{
    var hexadecimais = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++ ) {
        color += hexadecimais[Math.floor(Math.random() * 16)];
    }
    
    return color;
}

function estourar(objeto) 
{
    document.body.removeChild(objeto);
}

function start() 
{
   setInterval(addBall, 500);
}