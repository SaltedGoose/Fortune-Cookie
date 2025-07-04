let fortunes = [];
let count = 0;

async function loadFortunes () {
    try{
        const response = await fetch("https://api.sheety.co/b28a011384b372aeb5d4b9e2e430e43a/fortunes/fortunes");
        const result = await response.json();
        fortunes = result.fortunes;
        initApp();
    }
    catch(err){
        console.log(err);
    }
}

function fortuneDisplay(newFortune, start){
    if(start){
        $("#fortune, #new-fortune-btn").fadeOut(1000, function(){
            $("#dragon-img").fadeIn(3000, function(){
                $("#dragon-img").fadeOut(3000, function(){
                    $("#fortune").text(newFortune)
                    $("#new-fortune-btn").prop("disabled", false);
                    $("#fortune-div").css("visibility", "visible");
                    $("#fortune, #new-fortune-btn").fadeIn(1000);
                })
            })
        })
    }
    else{
        $("#fortune, #new-fortune-btn").fadeOut(1000, function(){
            $("#dragon-img").fadeIn(3000, function(){
                $("#dragon-img").fadeOut(3000, function(){
                    $("#fortune").text(newFortune)
                    $("#new-fortune-btn").prop("disabled", false);
                    $("#fortune, #new-fortune-btn").fadeIn(1000);
                })
            })
        })
    }
}

function randomFortune(start){
    $("#new-fortune-btn").prop("disabled", true);
    if (fortunes.length > 0){
        const newFortuneIndex = Math.floor(Math.random()*fortunes.length);
        const newFortune = fortunes[newFortuneIndex];
        fortunes.splice(newFortuneIndex,1);
        fortuneDisplay(newFortune.fortune, start);
    }
    else{
        let emptyFortune = ""
        if(count === 4){
            emptyFortune = "Ive told you i dont have anything else, leave me alone.";
        }
        else if(count === 9){
            emptyFortune = "Seriously im getting a restraining order.";
        }
        else{
            emptyFortune = "Erm.... I'm out. Can't think of anything."
        }

        if(count < 10){
            count++;
        }
        fortuneDisplay(emptyFortune, start);
    }
}

function initApp(){
    if(fortunes.length > 0){
        randomFortune(true);
    }
}

$("#new-fortune-btn").on("click", function(){
    randomFortune(false);
})

loadFortunes();