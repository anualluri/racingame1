class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var display_position = 130;
      var x=0; 
      var y=0;
      var index=0;

      for(var plr in allPlayers){
        if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)

        index= index+1;//can also write index++
        x= x+200;

        var eachPlayer= allPlayers[plr];
        y=displayHeight-eachPlayer.distance;

        var carIndex=index-1/*can also write index--*/
        if(carIndex<cars.length){
          cars[carIndex].x=x;
          cars[carIndex].y=y;
        }else{
          
        }
        if(index===player.index){
          cars[carIndex].shapeColor="red"
          camera.position.x=displayWidth/2
          camera.position.y=cars[carIndex].y
        }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }
}
