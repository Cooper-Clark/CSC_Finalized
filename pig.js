function resetPig()
{
    // We're playing pig boys
    console.log("piggy");

    //delcare variables
    var usertotal = 0;
    var dieresult = 0;

    var bozo1total = 0;
    var bozo2result = 0;
    var gameresult = "undecided";

    // decide who is going first
}

function rollDie()
{
    // roll boy
    return Math.floor(Math.random()*6)+1;
    console.log("Rolling Die");
}

function bozoTurn()
{
    // this runs the game for the AI players
}

function rollPig()
{
    console.log("Rolling in Pig");
    var result = rollDie();
    if (result != 1)
    {
    document.getElementById("dieresult").innerHTML = result;
    var temptotal = document.getElementById("usertotal").innerHTML;
    temptotal = temptotal + result;
    document.getElementById("usertotal").innerHTML = temptotal;
    }
    else
    {
    document.getElementById("gameresult").innerHTML = "You lost!";
    }
    // This represents the player rolling
}

function endPig()
{
    // This represents the player rolling
}

function craps()
{
    // declaring vars
    var d1 = Math.floor(Math.random()*6)+1;
    var d2 = Math.floor(Math.random()*6)+1;
    var sum = d2 + d1;
    var crapsgameresult = "undecided";

    //loss condition
    if (sum == 7 || sum == 11)
        {
            crapsgameresult = "You lost!";
        }
    //win condition
    else if (d1 == d2 && d1%2 == 0)
        {
            crapsgameresult = "You win!"
        }
    //idk what pushing means but this is the push condition
    else
        {
            crapsgameresult = "You pushed!"
        }

    // update html vars
    document.getElementById("d1").innerHTML = d1;
    document.getElementById("d2").innerHTML = d2;
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("crapsgameresult").innerHTML = crapsgameresult;

}

function playVineBoom()
{
    var a = document.getElementById('vineBoom')
    a.currentTime = 0
    a.play()
}

function selectRight()
{
    document.getElementById("identity").innerHTML = "conservative";
}

function selectLeft()
{
    document.getElementById("identity").innerHTML = "liberal";
}

// function
function submitArgument()
{
    identity = document.getElementById("identity").innerHTML;
    argument = document.getElementById("polinput").value;

    rand = Math.floor(Math.random()*6);
    counter = "";

    // logic
    if (rand==0)
    {
        counter = "source?"
    }
    if (rand==1)
    {
        counter = "Everybody that says \"" + argument + "\" supposedly also says [REDACTED]!"
    }
    if (rand==2)
    {
        counter = "But you see, " + identity + ", I have already depicted myself as the chad and you as the soyjack!"
    }
    if (rand==3)
    {
        counter = "..."
    }
    if (rand==4)
    {
        counter = "You're just repeating what you hear in your " + identity + " echo-chambers!"
    }
    if (rand==5)
    {
        counter = "Full Legal Name: John Phillips Smith \n Location: Tempe, Arizona \n IPv4: 65.21.324.568 \n SS Number: 717321787 \n IPv6:..."
    }
    // string manipulation
    document.getElementById("counter").innerHTML = counter;

    document.getElementById("UserTakes").innerHTML = "0";
    document.getElementById("CFPDSTakes").innerHTML = Math.floor(Math.random()*600);
    document.getElementById("UserBlunders").innerHTML = Math.floor(Math.random()*10000);
    document.getElementById("CFPDSBlunders").innerHTML = -1;
    document.getElementById("UserGoofs").innerHTML = (Math.floor(Math.random()*6)).toString() + ".2e+" + (Math.floor(Math.random()*60)).toString();
    document.getElementById("CFPDSGoofs").innerHTML = "minus infinity";
    document.getElementById("UserAFollies").innerHTML = "Too namy to count";
    document.getElementById("CFPDSAFollies").innerHTML = "Never ever";
}