$(document).ready(function(){
    if (window.location.href.indexOf("abstract") > -1){
        $('#abstract').prop('checked', true);
        marketFilter()
    }
    if (window.location.href.indexOf("cartoon") > -1){
        $('#cartoon').prop('checked', true);
        marketFilter()
    }
    if (window.location.href.indexOf("landscape") > -1){
        $('#landscape').prop('checked', true);
        marketFilter()
    }
    if (window.location.href.indexOf("manga") > -1){
        $('#manga').prop('checked', true);
        marketFilter()
    }
    if (window.location.href.indexOf("manga-cartoon") > -1){
        $('#manga').prop('checked', true);
        $('#cartoon').prop('checked', true);
        marketFilter()
    }
    if (window.location.href.indexOf("paint") > -1){
        $('#paint').prop('checked', true);
        marketFilter()
    }
    if (window.location.href.indexOf("portrait") > -1){
        $('#portrait').prop('checked', true);
        marketFilter()
    }
    })