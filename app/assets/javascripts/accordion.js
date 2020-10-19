$(document).ready(function(){
    console.log("accordion file");

    $(".accordion-header").click(function(){
        var div_id = $(this).data('target')
        var accordion_content = $("#"+div_id)
        if ( accordion_content.is(":visible") ){
            accordion_content.hide("clip" )

        }else{
            $(".accordion-content").hide("clip" )
            accordion_content.show("clip" )
        }
    });
});