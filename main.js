$(document).ready(function(){

    $(".yes").click(function(){
        alert("Anh cũng yêu em <3");
    })

    $(".no").click(function(){
        let Y = Math.floor(Math.random() * $(window).height());
        let X =  Math.floor(Math.random() * $(window).width());
        
        console.log(X, Y);
        $(this).css("top" , Y);
        $(this).css("left" , X);
    })
})

