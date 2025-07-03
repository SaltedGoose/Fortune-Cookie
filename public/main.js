let fortunes = [];

async function loadFortunes () {
    try{
        const response = await fetch("/fortunes");
        fortunes = await response.json();
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
                    $("#fortune").text(newFortune.fortune)
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
                    $("#fortune").text(newFortune.fortune)
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
        fortuneDisplay(newFortune, start);
    }
    else{
        console.log("empty")
        const newFortune = "Erm.... I'm out. Can't think of anything."
        fortuneDisplay(newFortune);
    }
}

function initApp(){
    if(fortunes.length > 0){
        randomFortune(true);
    }
}

$("#new-fortune-btn").on("click", function(){
    randomFortune();
})

loadFortunes();