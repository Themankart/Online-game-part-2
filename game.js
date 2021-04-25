class Game{

    constructor(){}

    getState(){
      
        var gameStateREF = database.ref("gameState");
        gameStateREF.on("value",(data)=>{

            gameState = data.val();

        })
    
    }
    update(state){
      database.ref("/").update({
          gameState:state
      })
    }
   
    async Start(){
        
        if(gameState === 0){


            player = new Player();
            var playerCountREF = await database.ref("playerCount").once("value");
            
            if(playerCountREF.exists()){

                playerCount = playerCountREF.val()
                player.getCount()


            }
            form = new Form();
            form.display();

           
        }
    }
 
        Play(){

            form.hide()

            text("Start", 130, 160);
            
        }




    }











