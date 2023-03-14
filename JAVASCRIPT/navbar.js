//It makes active the navbar section that is clicked

function activeSection(selected){

    var navbar = document.getElementById("navbar");
    var sections = navbar.getElementsByClassName("section");

    for (var i=0; i < sections.length; i++){

        if (i == selected){
            sections[selected].className += " active";
        }
        else{
            sections[i].classList.remove("active");
        }
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

    while(navbar.className == "active"){

        for (var i=0; i < sections.length; i++){          

            sections[i].addEventListener("click", function(){
                navbar.className = "";
                sections[i].activeSection(i);
            });
        }

        break;
    }  
} 