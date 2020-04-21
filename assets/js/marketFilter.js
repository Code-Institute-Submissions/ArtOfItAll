function filters(filter) {
    var filters = {
        0: "abstract",
        1: "cartoon",
        2: "landscape",
        3: "manga",
        4: "paint",
        5: "picture",
        6: "portrait"
    }
    return filters[filter];
}

function marketFilter() {
    for (var i = 0; i < 7; i++) {
            var elem = filters(i)
            var filter = document.getElementsByClassName(elem);
            for(var j = 0; j < filter.length; j++) {
                filter[j].style.display = "none";;
            }
        }
    var checkbox = document.getElementsByClassName("checkbox")
    for (var i = 0; i < checkbox.length; i++){
        if(checkbox[i].checked == true) {
            var filter = filters(checkbox[i].dataset.num);
            var filterChoice = document.getElementsByClassName(filter)
            for(var j = 0; j < filterChoice.length; j++) {
                filterChoice[j].style.display = "block";;
            }
        }
    }
}