$(document).ready(function(){
    var hide = document.getElementsByClassName("time");
    for(var i = 0; i < hide.length; i++) {
        hide[i].style.display = "none";;
    }
    $('#serviceTime').on('change', function () {
        var chosenOption = $(this).val();
        $("span.time").hide();
        $("#time" + chosenOption).show();
    });
})