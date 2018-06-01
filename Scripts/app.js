/* Custom JS goes here */

(function()
{
    function Start()
    {
        var title = document.title;
        console.log("Application Started");
        console.info("----------------------");
        console.warn("Title: " + title);
        
        // Calling to the titles on start
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
    function Bio()
    {
        // Strings containing my biography
        var bioFirstHalf = "My name is Jaden Hakim Mullings Wiafe. <br><br>I am a 6'4, darkskinned male. <br><br>I am from Canada but my Mom is from Grenada, and my Dad is from Ghana.";
        var bioSecondHalf = "<br>Explain's the darkness right? <br><br>I enjoy listening to music and watching anime. <br><br>I also I love coding more than anything else.";
        var bioThirdHalf = "<br>My goal is to become The World's Leading Inventor. <br><br>Before coming to Centennial College, I lived in Jane and Finch.";
        var bioFourthHalf = "<br>I started coding in November of 2017 and since then made a book and 2 apps.";
        var bioFifthHalf = "<br>My book is called ";
        var bioSixthHalf = " and my apps are called ";
        var bioSeventhHalf = " and ";
        var bioEightHalf = "<br><br>Well I made another game called ";
        var bioNinthHalf = " but you do not want to play that. <br><br> That's all about me."
        // Links to the books and apps
        var test = "Life and Everything in Between";
        var testLink = test.link("https://books.google.ca/books/about/Life_and_Everything_in_Between.html?id=-VhHDwAAQBAJ&redir_esc=y");
        var match = "Match";
        var matchLink = match.link("https://jadenm25.itch.io/jays-match");
        var switchGame = "SWITCH!";
        var switchLink = switchGame.link("https://jadenm25.itch.io/switch");        
        var trumpVsKanye = "Trump vs Kanye";
        var trumpVsKanyeLink = trumpVsKanye.link("https://jadenm25.itch.io/kanye-vs-trump");
        // Adding to the document
        let bio = document.getElementById("bio").innerHTML = bioFirstHalf + "<br>" + bioSecondHalf + "<br>" + bioThirdHalf + "<br>" + bioFourthHalf + "<br>" + bioFifthHalf + testLink + bioSixthHalf + matchLink + bioSeventhHalf + switchLink
        + bioEightHalf + trumpVsKanyeLink + bioNinthHalf;
    }

    window.onload = Start;
})();