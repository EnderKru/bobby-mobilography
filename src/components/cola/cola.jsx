import "./cola.css"
import React from "react";

export function Cola(){
    const content1 = document.querySelector('.content-1');
    const content2 = document.querySelector('.content-2');
    
    
    content1.classList.add('hide');
    content2.classList.add('hide');
    
    function appearFromTop() {
        content1.classList.add('appear-from-top');
    }
    
    function appearFromBottom() {
        content2.classList.add('appear-from-bottom');
    }
    
    setTimeout(appearFromTop, 1000);
    setTimeout(appearFromBottom, 1500);
    
    
    function removeAnimationClasses() {
        content1.classList.remove('appear-from-top');
        content2.classList.remove('appear-from-bottom');
    }
    
    
    window.addEventListener('beforeunload', removeAnimationClasses);
    
    let lastScrollTop = 0;
    
    window.addEventListener("scroll", function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
        if (currentScroll > lastScrollTop) {
            
            content1.classList.add('hide');
            content2.classList.add('hide');
        } else {
            
            content1.classList.remove('hide');
            content2.classList.remove('hide');
        }
    
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
    }, false);

    return(
        <div class="main-container">
        <div class="main-content">
            <div class="content-1 hide">
                <span class="gold">300 000 СОМ</span>
                <span class="bigwhite">призовой фонд</span>
            </div>
            
            <div class="content-2 hide ">
                <p class="idea">ГЛАВНАЯ ИДЕЯ</p>
                <p class="torma">ТУРНИРА</p>
            </div>
        </div>
      </div>
    )
}