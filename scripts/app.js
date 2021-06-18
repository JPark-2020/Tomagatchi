// const removeForm = function removeForm(){
//     $(".name_pet").remove();
// }


const getName = function getName(){
    document.getElementById('pet_name').innerHTML = document.getElementById("get_name").value;
}

$("#power_button").click(function(){
    $(".name_pet").fadeToggle(2000);
})

$("#name_button").click(function(){
    getName();
    $(".name_pet").remove();
    $("#game_screen").fadeToggle(2000);
})

