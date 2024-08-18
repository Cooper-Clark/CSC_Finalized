let updateTimer = window.setInterval(update, 30);
MaxRight = 500
MaxLeft = 200
MemePos = MaxLeft+10
CurrentDir = 1
move = false

function imageMoveToggle(yn)
{
move = yn
document.getElementById("onButton").disabled = yn
document.getElementById("offButton").disabled = !(yn)
}

function update()
{
    if (move == true)
    {
        var thePadding = MemePos
        if (((thePadding > MaxRight) || (thePadding <= MaxLeft)))
            {
                CurrentDir = CurrentDir*-1
            }
        MemePos += 5*CurrentDir
        document.getElementById("memeImage").style.left = MemePos.toString()+"px"
    }
}
