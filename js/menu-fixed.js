/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var num = 80; //number of pixels before modifying styles
var lastScroll = 0;
var a = $("#test-jc");
var i = 0;

$(window).scroll(function () {    
    
    if ($(window).scrollTop() > num) 
    {                         
        
        if ($(window).scrollTop() > lastScroll)
            {                           
                       //Replace this with your function call for downward-scrolling
                if((a.css("display")=="block")&&(i==1))
                {
                    a.slideUp(600);
                }             
                                         
            }
        else     
           {                
                i = 1; 
                a.addClass('fixed');
                a.slideDown(600);
           }
                    //Updates scroll position
        lastScroll = $(window).scrollTop();   
        
    } 
    else 
    {
        i = 0;
        a.removeClass('fixed');        
        lastScroll = $(window).scrollTop();
    }
});

