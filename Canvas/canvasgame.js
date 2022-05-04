var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var bulletArr = [];

class player{
    constructor(x,y,radius,color)
    {
        this.pos_x = x;
        this.pos_y = y;
        this.radius = radius;
        this.color = color;
    }

    draw()
    {
        context.beginPath();
        context.arc(this.pos_x, this.pos_y, this.radius, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}

class bullet{
    constructor(x,y)
    {
        this.pos_x = x;
        this.pos_y = y;
    }
    draw()
    {
        context.beginPath();

        context.arc(this.pos_x, this.pos_y, 10, 0, 2*Math.PI);
        context.fillStyle = 'black';
        context.fill();
        context.closePath();
    }
}


function MakeBullet(e)
{
    let x = e.clientX - canvas.offsetLeft;
    let y = e.clientY - canvas.offsetTop;
    bulletArr.push(new bullet(x, y));
    for(var i = 0; i < bulletArr.length; i++)
    {
        bulletArr[i].draw();
    }
}

var p = new player(100,100,30,'pink');
p.draw();