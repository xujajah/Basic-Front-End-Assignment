$(document).ready(function(){
$(document).on('click','.card',function(){
    if( $(this).hasClass("color"))
    {
        $(this).removeClass("color");
    }
    else
    {
        $(this).addClass("color");
    }
});
})  
