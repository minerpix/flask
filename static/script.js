var i = 1;
const animationDuration = 50;
const animationEasing = "linear";
$(document).ready(function(){
    $("#button").click(function(){
        if(i == 1){
            $("button").html("minimized")
            for (let j = 0; j < 5; j++) {
                $("#img").animate({left: "+=40px", position: 'relative'}, animationDuration, animationEasing);  
                $("#img").animate({top: '+=40px', position: 'relative'}, animationDuration, animationEasing);          
            }
            i = 0;
        } else {
            $("button").html("Click Me")
            for (let j = 0; j < 5; j++) {
                $("#img").animate({top: '-=40px', position: 'relative'}, animationDuration, animationEasing);  
                $("#img").animate({left: '-=40px', position: 'relative'}, animationDuration, animationEasing);  
                        
            }
            i = 1;
        }

    })
    //jQuery methods go here
    //$ is jQuery
})