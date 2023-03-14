function activeSection(selected){

    var navbar = document.getElementById("navbar");
    var sections = navbar.getElementsByClassName("section");

    for (var i=0; i < sections.length; i++){
        
            var current = document.getElementsByClassName("active");
            current[0].className = "section";
            sections[selected].className += " active";
        };
}

 //It makes visible the menu when the menuBtn is clicked

function visibleMenu(){
   
    var navbar = document.getElementById("navbar");
    var sections = navbar.getElementsByClassName("section");

    if (navbar.className == ""){
        navbar.className = "active";
    }
    else if (navbar.className == "active"){
        navbar.className = "";
    }
    


    
}  
  
while(navbar.className == "active"){

    for (var i=0; i < sections.length; i++){
    
        sections[i].addEventListener("click", function(){
            navbar.className = "";
            console.log("navbar active");
        },false)};
    };


    while(navbar.className == "active"){

        for (var i=0; i < sections.length; i++){

            sections[i].addEventListener("click", function(){
                navbar.className = "";
                console.log("navbar active")
            });
        }

        break;
    }
