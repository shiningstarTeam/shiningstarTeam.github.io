$(function() {
    $( "#tabs" ).tabs();
});

function tab_selector(index) {
    var $tabs = $('#tabs').tabs();
    $tabs.tabs('select', index);
    $('div#menu_timeline > div').removeClass();
    $('div#menu_timeline > div:nth-child('+(index+1)+')').addClass("content_map current");
}