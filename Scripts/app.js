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
                ProjectsPage();
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
    //Project's Page function
    function ProjectsPage()
    {
        //Strings for book
        var bookDescriptionOne = "<br>Hi, My name is Jaden Mullings - Wiafe. I made a book containing my life and all the things that have happened.";
        var bookDescriptionTwo = "Reading this alone, it probably just seems like it will be some simple relationships, and family deaths, right?";
        var bookDescriptionThree = "Well, my book has, for one, my alcoholic mom, two her abusive boyfriend, and yeah, a lot of cheating females. <br>Oh yeah, the ongoing death of friends and family (animals too).";
        var bookDescriptionFour = "If you ever feel like reading something, I say you give it a try, you might find it interesting.";
        // Adding to the document
        let bookDescription = document.getElementById("bookDescription").innerHTML = bookDescriptionOne + "<br>" + bookDescriptionTwo + "<br>" + bookDescriptionThree + "<br>" + bookDescriptionFour;
        
        //Strings for Match app
        var matchDescriptionOne = "<br>Match was the fastest game I have made and I think my best.";
        var matchDescriptionTwo = "It is simple, fun, but the graphics are boring, so that is my new goal for it.";
        var matchDescriptionThree = "Personally, I think this game has the capacity to become one of the top, but you will need to see it to believe me.";
        // Adding to the document
        let matchDescription = document.getElementById("matchDescription").innerHTML = matchDescriptionOne + "<br>" + matchDescriptionTwo + "<br>" + matchDescriptionThree;
        
        //Strings for SWITCH! app
        var switchDescriptionOne = "<br>SWITCH! was the game I took the most time in.";
        var switchDescriptionTwo = "I basically just considered it a practice app in all, but it was fun to make and I learned a lot.";
        var switchDescriptionThree = "It is simple, hard, and challenging, but with no effects, it looked dull.";
        var switchDescriptionFour = "I can say for sure that this can became very good with a little bit more effort.";
        //Adding to the document
        let switchDescription = document.getElementById("switchDescription").innerHTML = switchDescriptionOne + "<br>" + switchDescriptionTwo + "<br>" + switchDescriptionThree + "<br>" + switchDescriptionFour;
    }

    //On Page / window loaded
    window.onload = Start;
})();