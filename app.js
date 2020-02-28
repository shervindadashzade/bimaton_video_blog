var modal = document.getElementById("post-modal");
var menu = document.getElementById("menu");

menu_show = false;
show = false;

function toggle_modal(){
    if(show){
        modal.style.display = 'none';
        show = false;
    }else{
        modal.style.display = 'block';
        show = true;
    }
}
var mynavbar = document.getElementsByClassName("mynavbar")[0];
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mynavbar.classList.add('navbar-bg');
    }else{
        mynavbar.classList.remove('navbar-bg');
    }
}
window.onscroll = function() { this.scrollFunction() };

function scrollToElement(element){
    var el = document.getElementById(element);
    el.scrollIntoView({behavior:"smooth",block:"start"});
}
function toggle_menu(){
    if(menu_show){
        menu.style.display="none";
        menu_show = false;
    }else{
        menu.style.display="block";
        menu_show = true;
    }
}