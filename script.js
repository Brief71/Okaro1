function popup(whichone){
var docTitle = document.getElementById("popup-title-text");
var docDescription = document.getElementById("popup-description-text");

    if (whichone == 'relax')
    {
    docTitle.textContent='Deeply Relax Your Mind And Body!';
    docDescription.textContent='Relative physical relaxation is fairly accessible by physically allowing the body to relax. We can imagine also that there are relatively deeper levels of relaxation. The deeper relaxation levels allow the body and mind to stabilize a relaxed state of awareness.';
    }

    if (whichone == 'clear')
    {
    docTitle.textContent='Cast Trauma And Stress Away!';
    docDescription.textContent='';
    }
    
    if (whichone == 'connect')
    {
    docTitle.textContent='Get In Touch With Yourself!';
    docDescription.textContent='Feeling out of touch with yourself? Learn multiple methods to establish and stabilize an energy giving relationship with yourself.';
    }

    if (whichone == 'activate')
    {
    docTitle.textContent='Turn On Your Super Powers!';
    docDescription.textContent='Ever imagined transcended levels of being present. Learn how to dive into the vibe of things and connect to the central web of all phenomenal existances.';
    }
}



document.getElementById("dismis-popup-btn")
.addEventListener("click",function(){
    document.getElementsByClassName("popup")[0]
    .classList.remove("active");
});

document.getElementById("open-popup-btn-relax")
.addEventListener("click",function(){
    document.getElementsByClassName("popup")[0]
    .classList.add("active");
});

document.getElementById("open-popup-btn-clear")
.addEventListener("click",function(){
    document.getElementsByClassName("popup")[0]
    .classList.add("active");
});

document.getElementById("open-popup-btn-connect")
.addEventListener("click",function(){
    document.getElementsByClassName("popup")[0]
    .classList.add("active");
});

document.getElementById("open-popup-btn-activate")
.addEventListener("click",function(){
    document.getElementsByClassName("popup")[0]
    .classList.add("active");
});
