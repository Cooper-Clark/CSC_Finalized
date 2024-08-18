function submitName()
{
    // Clearing HTML elements
    document.getElementById("warning").innerHTML = "";
    document.getElementById("result").innerHTML = "";

    // Getting Vars
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    fullname = fname + " " + lname;
    zcode = parseInt(document.getElementById("zcode").value);

    //Validating Inputs
    if (fullname.length > 20)
    {
        document.getElementById("warning").innerHTML = "Your name is too long, get a new name dingus."
        return "";
    }
    if ((zcode.toString()).length != 5)
    {
        document.getElementById("warning").innerHTML = "That's not a real ZIP code, dingus."
        return "";
    }

    //Sending threatening secret message
    document.getElementById("result").innerHTML = "I know where you live, " + fullname;


}

function submitPalindrome()
{
    // Clearing HTML elements
    document.getElementById("palresult").innerHTML = "";

    // Getting Vars
    querySpaces = document.getElementById("query").value;

    var space = " "
    var spaceUTF16 = space.charCodeAt(0)
    //Removing Spaces
    query = ""
    var querySpacesLen = querySpaces.length
    for (var i=0; i<querySpacesLen; i++)
        {
            if (querySpaces.charCodeAt(i) != spaceUTF16)
                {
                    query = query + querySpaces[i]
                }
        }

    //Testing for Palindrome
    var queryLen = query.length
    var isPal = true
    for (var i=0; i<queryLen; i++)
        {
            var queryLet1 = query.charCodeAt(i)
            var queryLet2 = query.charCodeAt(queryLen-i-1)

            if (queryLet1 != queryLet2)
                {
                    isPal = false
                    i = queryLen
                }
        }
    

    //Returning Result
    if (isPal == true)
        {
            document.getElementById("palresult").innerHTML = "This is a Palindrome!";
        }
    else
        {
            document.getElementById("palresult").innerHTML = "This is not a Palindrome!";
        }
}