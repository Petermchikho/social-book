/**for the setting */

var settingsmenu=document.querySelector(".settings-menu");


function settingsmenuToggle(){

    settingsmenu.classList.toggle("setting-menu-height");
}
/**for the button */
var darkBtn=document.getElementById("dark-btn")

darkBtn.onclick=function(){
    darkBtn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme")
    /*if the local storage the had a vale of light on click on the dark theme buttom*/
    /*4*/
    if(localStorage.getItem("theme") =="light"){
        /*change the value in the theme to dark*/
        localStorage.setItem("theme","dark")
    }/*if it was already dark the change the value to light*/
    else{
        localStorage.setItem("theme" ,"light")
    }

}

/* create the local storage so that the website keeps the theme even if the user closes or refleshs the browser
localStorage.setItem("theme","dark");
to get the name(theme) and value(dark) 
localStorage.getItem("theme");
*/

/*if the local storage theme has a value of light remove*/
/*3*/
if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on")
    document.body.classList.remove("dark-theme")
}/**else if the local storage theme has a value dark add*/
/*2*/
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on")
    document.body.classList.add("dark-theme")

}/**no local storage is there hence first time visiting the website */
else{
    localStorage.setItem("theme","light");
}/*1*/