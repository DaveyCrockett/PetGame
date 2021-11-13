let hunger = 25;
let happiness = 25;
let energy = 25;
// the hunger, happiness and energy should by greater than 0 and less than 100
// need an IF statement
function DisplayValues(){
    document.getElementById("petHunger").innerHTML = `${hunger}`;
    document.getElementById("petHappiness").innerHTML = `${happiness}`;
    document.getElementById("petEnergy").innerHTML = `${energy}`;
    }

function Feed(){
    //increses happiness and decrease hunger
    if((hunger > 0 && hunger < 100) && (happiness > 0 && happiness < 100)&&(energy > 0 && energy < 100)){
        happiness += 10;
        hunger -= 10;
        energy += 10;
        DisplayValues();
    }
  
}

function Pet(){
    // increases happiness
    if(happiness > 0 && happiness < 100){
        happiness += 15;
        DisplayValues();
    }
    
}
function Play(){
    // increases happiness and decrease energy and increase hunger
    if((hunger > 0 && hunger < 100) && (happiness > 0 && happiness < 100)&&(energy > 0 && energy < 100)){
        happiness += 15;
        energy -= 5;
        hunger += 15;
        DisplayValues();
    }
}

DisplayValues();