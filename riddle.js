class Riddle {
    constructor(){
        this.input = createInput("Your Answer");
        this.button = createButton('Submit');
    }
    display(){
     text("I come from a mine ",400,290);
     textSize(30);
     text("and get's surrounded ",400,330)
     textSize(30);
     text("by wood only.",400,370);
     textSize(30);
     text("everyone uses me!",400,410)
     textSize(30);
     text("What am I?",400,450)
     textSize(30);
     stroke("black");
     fill("black");
     text("(Note: write everything in small)",400,490);
     textSize(30);
     this.input.position(450,520);
     this.button.position(450,540);
    var answer = this.input.value();
    
    //if (answer==="pencil lead"){

   // }
    }
}