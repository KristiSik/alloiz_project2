$(document).ready(function(){
    $(".dropdown-btn").on("click", function(){
        $(".dropdown-content").fadeToggle();
    });
    window.onclick = function(event) {
        console.log(event.target);
        if (!(event.target.matches('.dropdown-btn') 
        || event.target.matches(".heart-icon") 
        || event.target.matches(".dropdown-content")
        || event.target.matches(".dropdown-content-share-it")
        || event.target.matches(".dropdown-content-subscribe, .dropdown-content-subscribe h2, .dropdown-content-subscribe p, .dropdown-content-subscribe input, .dropdown-content-subscribe button")
        || event.target.matches(".dropdown-content div, .dropdown-content a")
        || event.target.matches(".share-it-icons"))) {
            $(".dropdown-content").fadeOut();
        }
    }
});