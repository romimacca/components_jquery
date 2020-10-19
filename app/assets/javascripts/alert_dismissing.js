$(document).ready(function(){
    console.log("alert dismissing file");

    $(".alert-close").click(function(){
        $(".alert").fadeOut('slow', function(){
            $(this).remove()
        });
    });
});