class Form{

constructor(){

    this.input = createInput("Name")
    this.button = createButton("Play!")
    this.Greeting = createElement("h2");

    
}

  hide(){


    this.Greeting.hide()
    this.button.hide()
    this.input.hide()

  }

display(){
    var Title = createElement("h2");
    Title.html("Multiplayer Car Racing Game!!")
    Title.position(130,0);

    this.input.position(130,160);

    this.button.position(250,200);
    this.button.mousePressed(()=>{
          // "=>" means function
        
        this.input.hide();
        this.button.hide();

    player.name = this.input.value();
    //"playerCount += 1" means another way to increment the count by 1
    playerCount += 1;
    
    player.updateCount(playerCount);
    

    this.Greeting.html("Welcome! "+ player.name);
    this.Greeting.position(130,160);
    })
}
    



}