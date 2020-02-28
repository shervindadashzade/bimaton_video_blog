var modal = document.getElementById("post-modal");
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