$(function() {
    var wH = $('.cHead').outerWidth();
    var wA = $('.cAll').outerWidth();
    $('#cInner').width(wH + wA);
    var wI = $('#cInner').outerWidth();
    
    $('#fmColumn').width(wI);
});