class App

{
    runApplication()

    {
        let canvas = document.getElementById("canvasId")
        console.log(canvas)
        let g = canvas.getContext("2d");
        
        document.getElementById("newstitle")
        let randomGetal = Math.random();
        if (randomGetal == 0)
        {
            console.log("wow")
            title.style.backgroundColor
        }
        else if (randomGetal <= 0.2)
        {
            console.log("ok")
        }
        else if (randomGetal > 0.2 && randomGetal < 0.6)
        {
            console.log("zo")
        }
        else if (randomGetal >= 0.6)
        {
            console.log("hoog")
        }

        
        let kleur = Math.random();
        if (kleur > 0.5){
            "yellow"
        }
        else if (kleur < 0.5){
            "blue"
        }
        
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(300,100)
        g.lineTo(200,300)
        g.lineTo(600,400)
        g.lineTo(700,200)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "lightPink";
        g.moveTo(200,300)
        g.lineTo(200,500)
        g.lineTo(600,600)
        g.lineTo(600,400)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "lightYellow";
        g.moveTo(600,400)
        g.lineTo(700,200)
        g.lineTo(800,300)
        g.closePath();
        g.stroke();
        g.fill();
        
        g.beginPath()
        g.fillStyle = "cyan";
        g.moveTo(600,400)
        g.lineTo(600,600)
        g.lineTo(800,500)
        g.lineTo(800,300)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = kleur;
        g.moveTo(650,450)
        g.lineTo(650,550)
        g.lineTo(750,500)
        g.lineTo(750,400)
        g.closePath();
        g.stroke();
        g.fill();

    }
}

let app = new App();
app.runApplication();
