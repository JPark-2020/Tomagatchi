const foodIcon = '<li><i class="fa fa-cutlery" aria-hidden="true"></i></li>';
const restIcon = '<li><i class="fa fa-lightbulb-o" aria-hidden="true"></i></li>';
const happyIcon = '<li><i class="fa fa-paw" aria-hidden="true"></i></li>';
const successIcon = '<li class="bounceTrophy"><i class="nes-icon trophy is-large"></i></li>';
// Get the name that User sets for the pet
const getName = function getName(){
    document.getElementById('pet_name').innerHTML = document.getElementById("get_name").value;
}

// On Power show the form for user input 
$("#power_button").click(function(){
    $(".name_pet").fadeToggle(2000);
})

// On submittal of form remove form and show game screen 
$("#name_button").click(function(){
    getName();
    $(".name_pet").remove();
    $("#game_screen").fadeToggle(2000);
    start(); 
})

// Pet Object Starting values 
const pet = {
    age: 1,
    hunger: 7,
    rest: 7,
    happiness: 7,
};


const start = function(){

// BOUNCE Animation
    const bounceFunction = function(){
        if(pet.age == 101 || pet.hunger == 0 || pet.hunger == 11 || pet.rest == 0 || pet.rest == 11 || pet.happiness == 0 || pet.happiness == 11){
            clearInterval(bounceID);
        }
        else{
            $("#pet").animate({
                "top": "+=30px"
            }, 100);
            $("#pet").animate({
                "top": "-=30px"
            }, 150);
            $("#pet").animate({
                "top":"-=30px"
            }, 200);
            $("#pet").animate({
                "top":"+=30px"
            }, 250);
        };
    }
    const bounceID = setInterval(bounceFunction, 800);
    setTimeout(bounceFunction, 120000);

// AGE Function
    const ageFunction = function() {

        $(".nes-progress").attr('value', pet.age);

        if(pet.age == 101 || pet.hunger == 0 || pet.hunger == 11 || pet.rest == 0 || pet.rest == 11 || pet.happiness == 0 || pet.happiness == 11){
            clearInterval(ageID);
        }
        // Increase pet age until no longer < 50 
        else if(pet.age<50){
            pet.age++;
            $("#pet_age").text(pet.age); 
        }
        // Increase pet age until < 100 and change pet into ash upon >= 50 
        else if(pet.age >= 50 && pet.age < 100){
            pet.age++;
            $("#pet_age").text(pet.age);
            $("#pet").attr('class', "nes-ash");
        }
        // At end change ash to Mario + display success message 
        else {
            $("#pet_age").text(pet.age);
            $("#pet").attr('class', "nes-mario");
            $("#deathmessage").text("Success - You did it!");
            $(".successIcons").append(successIcon);
            $(".successIcons").append(successIcon);
            $(".successIcons").append(successIcon);
            clearInterval(ageID);
            }
    };

    const ageID = setInterval(ageFunction, 1200);


// HAPPINESS
    const happyFunction = function() {
        
        if(pet.age == 100 || pet.hunger == 0 || pet.hunger == 11 || pet.rest == 0 || pet.rest == 11 || pet.happiness == 0 || pet.happiness == 11){
            clearInterval(happyID);
            
            if(pet.happiness === 0){
                $("#deathmessage").text("Game Over: Much sadness");
                $("#pet").attr('class', "nes-icon close is-large");
            }

            else if(pet.happiness === 11){
                $("#deathmessage").text("Game Over: Adrenaline Rush");
                $("#pet").attr('class', "nes-icon close is-large");
            };
        }

        else if(pet.happiness > 0 && pet.happiness <= 10){
            pet.happiness--;
            $(".happy_meter li").first().remove();
        };
    };

    $("#play_button").click(function(){
        if(pet.happiness > 0 && pet.happiness <= 10){
            
            $(".happy_meter").append(happyIcon);
            pet.happiness++;
            
            $("#pet").animate({
                "margin-top": "+=100px"
            }, 500);
            $("#pet").animate({
                "margin-top": "-=100px"
            }, 800);
        }
    });

    const happyID = setInterval(happyFunction, 3000); 


// REST
    const restFunction = function(){
        if(pet.age == 100 || pet.hunger == 0 || pet.hunger == 11 || pet.rest == 0 || pet.rest == 11 || pet.happiness == 0 || pet.happiness == 11){
            clearInterval(restID);
            
            if(pet.rest > 10){
                $("#deathmessage").text("Game Over: Eternal Slumber");
                $("#pet").attr('class', "nes-icon close is-large");
            }
            
            else if(pet.rest == 0){
                $("#deathmessage").text("Game Over: Lack of Sleep");
                $("#pet").attr('class', "nes-icon close is-large");
            };
        }
        
        else if($("#game_screen_container").hasClass("on")){
            pet.rest--;
            $(".rest_meter li").first().remove();
        }
        
        else if(pet.rest > 0 && pet.rest <= 10){
            pet.rest++;
            $(".rest_meter").append(restIcon);
        };
    };

    $("#light_button").click(function(){
        $("#game_screen_container").toggleClass(); 
    
        if($("#game_screen_container").hasClass("on")){
            $("#game_screen_container").css("background-color","skyblue");
            $("p").css("color","black")
            $("#deathmessage").css("color", "black")
        }
    
        else{
            $("#game_screen_container").css("background-color","black");
            $("p").css("color", "white");
            $("#deathmessage").css("color", "white");
        }
    });
    
    const restID = setInterval(restFunction, 2500);
// HUNGER 

    const hungerFunction = function(){

        if(pet.age == 100 || pet.hunger == 0 || pet.hunger == 11 || pet.rest == 0 || pet.rest == 11 || pet.happiness == 0 || pet.happiness == 11){
            clearInterval(hungerID);

            if(pet.hunger == 0){
                $("#deathmessage").text("Game Over: Starvation")
                $("#pet").attr('class', "nes-icon close is-large");
            }

            else if(pet.hunger > 10){
                $("#deathmessage").text("Game Over: Overconsumption")
                $("#pet").attr('class', "nes-icon close is-large");
            };
        }

        else if(pet.hunger > 0 && pet.hunger <= 10){
            pet.hunger--;
            $(".food_meter li").first().remove(); 
        } 
    };

    $("#feed_button").click(function(){

        if(pet.hunger > 0 && pet.hunger < 11){
            $(".food_meter").append(foodIcon);
            pet.hunger++;

            $("#pet").animate({
                "left":"+=200px"
            }, 500);

            $("#food").fadeIn(400);
            $("#food").fadeOut(500);
            
            $("#pet").animate({
                "left":"-=200px"
            },1000);
        }
    });
    
    const hungerID = setInterval(hungerFunction, 2000);
};