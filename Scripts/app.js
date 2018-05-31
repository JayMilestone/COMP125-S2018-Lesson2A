/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
(function(){

    "use strict"
    
    function Start() {
        // local variable
        let title = document.title;


        console.log("App Started!");
        console.log("----------------------------");
        console.log("Title: " + title);
    }

    window.onload = Start;
})();