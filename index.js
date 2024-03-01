// when press to links choose will appear megaMenu
let megaMenu = document.getElementsByClassName("mega-menu")[0];
let links = document.getElementsByClassName("link")[0];

links.onclick = function() {
    megaMenu.classList.toggle("active");
};



// when scrolly =  7205 span will move to width
let span1 = document.getElementsByClassName("span1")[0] ;
let span2 = document.getElementsByClassName("span2")[0] ;
let span3 = document.getElementsByClassName("span3")[0] ;
let span4 = document.getElementsByClassName("span4")[0] ;
window.onscroll = function() {
    if(scrollY >= 7205){
        span1.style.width="80%" ;
        span1.style.backgroundColor="#2196F3"
        span2.style.width="85%" ;
        span2.style.backgroundColor="#2196F3"
        span3.style.width="70%" ;
        span3.style.backgroundColor="#2196F3"
        span4.style.width="80%" ;
        span4.style.backgroundColor="#2196F3"
    }
}
