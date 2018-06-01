/* Custom JS goes here */

(function()
{
    function Start()
    {
        // Title variable for each <title>
        var title = document.title;

        console.log("Application Started");
        console.info("----------------------");
        console.warn("Title: " + title);
        
        // Calling to the <title> on start
        switch(title)
        {
            case "Biography":
                Bio();
                break;
            case "Project's Page":
                break;
            case "Contact":
                break;
        }
    }
    //Biography Function
    function Bio()
    {
        // Strings containing my biography
        var bioFirstPart = "My name is Jaden Hakim Mullings Wiafe. <br><br>I am a 6'4, darkskinned male. <br><br>I am from Canada but my Mom is from Grenada, and my Dad is from Ghana.";
        var bioSecondPart = "<br>Explain's the darkness right? <br><br>I enjoy listening to music and watching anime. <br><br>I also I love coding more than anything else.";
        var bioThirdPart = "<br>My goal is to become The World's Leading Inventor. <br><br>Before coming to Centennial College, I lived in Jane and Finch.";
        var bioFourthPart = "<br>I started coding in November of 2017 and since then made a book and 2 apps.";
        var bioFifthPart = "<br>My book is called ";
        var bioSixthPart = " and my apps are called ";
        var bioSeventhPart = " and ";
        var bioEightPart = "<br><br>Well I made another game called ";
        var bioNinthPart = " but you do not want to play that. <br><br> That's all about me."
        // Links to the books and apps
        var book = "Life and Everything in Between";
        var bookLink = book.link("https://books.google.ca/books/about/Life_and_Everything_in_Between.html?id=-VhHDwAAQBAJ&redir_esc=y");
        var match = "Match";
        var matchLink = match.link("https://jadenm25.itch.io/jays-match");
        var switchGame = "SWITCH!";
        var switchLink = switchGame.link("https://jadenm25.itch.io/switch");        
        var trumpVsKanye = "Trump vs Kanye";
        var trumpVsKanyeLink = trumpVsKanye.link("https://jadenm25.itch.io/kanye-vs-trump");
        // Adding to the document
        let bio = document.getElementById("bio").innerHTML = bioFirstPart + "<br>" + bioSecondPart + "<br>" + bioThirdPart + "<br>" + bioFourthPart + "<br>" + bioFifthPart + bookLink + bioSixthPart + matchLink + bioSeventhPart + switchLink
        + bioEightPart + trumpVsKanyeLink + bioNinthPart;
    }

    //On Page / window loaded
    window.onload = Start;
})();