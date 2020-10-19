$(document).ready(function(){
    console.log("collapse file");

    $(".collapse-btn").click(function(){
        $(".collapse-content").toggle( "blind" )
    })
});