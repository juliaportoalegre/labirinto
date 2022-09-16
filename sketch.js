
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var chao1,chao2,chao3,chao4,chao5,chao6,chao7,chao8,chao9,chao10;
var chao11,chao12,chao13,chao14,chao15,chao16,chao17,chao18,chao19,chao20;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
		//x, y, largura, altura
	//Crie os Corpos aqui.
	chao1 = new Ground(10, 10, 3000, 20)
	chao2 = new Ground(10, 100, 300, 20)
	chao3 = new Ground(275, 175, 20, 155)
	chao4 = new Ground(10, 390, 20, 600)
	chao5 = new Ground(10, 689, 3000, 20)
	chao6 = new Ground(1490, 10, 20, 1150)
	chao7 = new Ground(201, 250, 170, 20)
	chao8 = new Ground(400, 175, 20, 350)
	chao9 = new Ground(310, 351, 200, 20)
	chao10 = new Ground(110, 325, 20, 290)

	chao11 = new Ground(380, 590, 555, 20)
	chao12 = new Ground(320, 460, 400, 20)
	chao13 = new Ground(510, 295, 20, 350)
	chao14 = new Ground(650, 120, 300, 20)
	chao15 = new Ground(790, 300, 20, 560)
	chao16 = new Ground(650, 400, 20, 400)
	chao17 = new Ground(900, 250, 170, 20)
	chao18 = new Ground(900, 175, 20, 350)
	chao19 = new Ground(900, 351, 200, 20)
	chao20 = new Ground(900, 370, 20, 260)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  chao1.display();
  chao2.display();
  chao3.display();
  chao4.display();
  chao5.display();
  chao6.display();
  chao7.display();
  chao8.display();
  chao9.display();
  chao10.display();

  chao11.display();
  chao12.display();
  chao13.display();
  chao14.display();
  chao15.display();
  chao16.display();
  chao17.display();
  chao18.display();
  chao19.display();
  chao20.display();

  
  drawSprites();
  text("X: "+mouseX+"/ Y: "+mouseY,mouseX,mouseY);
}



