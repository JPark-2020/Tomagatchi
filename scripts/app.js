var foodIcon = '<li><i class="fa fa-cutlery" aria-hidden="true"></i></li>'
var restIcon = '<li><i class="fa fa-lightbulb-o" aria-hidden="true"></i></li>'
const happyIcon = '<li><i class="fa fa-question" aria-hidden="true"></i></li>'


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
    hunger: 4,
    rest: 7,
    happiness: 3,
}

const start = function start(){
    setInterval(ageFunction, 1000); 
    setInterval(hungerFunction, 2000);
}


// Age Function
const ageFunction = function ageFunction() {
    // Increase pet age until no longer < 50 
    if(pet.age<50){
        pet.age++;
        $("#pet_age").text(pet.age); 
    // Increase pet age until < 100 and change pet into ash upon >= 50 
    } else if(pet.age >= 50 && pet.age < 100){
        pet.age++;
        $("#pet_age").text(pet.age);
        $("#pet").attr('class', "nes-ash");
    // At end change ash to Mario + display success message 
    } else {
        $("#pet_age").text(pet.age);
        $("#pet").attr('class', "nes-mario");
    }
};


// Happiness Function
// const happyFunction = function happyFunction() {

// }

// $("#play_button")


// Rest Function
// $("#light_button")

// HUNGER ------------
// Hunger Function 
const hungerFunction = function hungerFunction(){
    if(pet.hunger > 0 && pet.hunger <= 10){
        pet.hunger--;
        $(".food_meter li").first().remove(); 
    } else if(pet.hunger == 0){
        $("#deathmessage").text("Game Over: Starvation")
    } else {
        $("#deathmessage").text("Game Over: Overconsumption")
    }
};
// Hunger Button
$("#feed_button").click(function(){
    if(pet.hunger > 0 && pet.hunger < 11){
        $(".food_meter").append(foodIcon);
        pet.hunger++;
    }
})

// ----------------

// // Sample function to run 
// function alertMe(){
//     alert('hi')
// }

// // Invoke Function every 5 seconds 
// setInterval(alertMe, 5000)

// // Save id value returned by set interval
// const timerId = setInterval(alertMe, 5000)

// // To stop this function from working pass into clearInterval
// clearInterval(timerId)