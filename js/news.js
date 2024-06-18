
$(document).ready(function(){

    $('.popular-posts .widget-title').prepend('<img class="icon" src="'+ $('.news-content .list-block').attr('popular-image') +'">');
    $('.widget_recent_entries .widget-title').prepend('<img class="icon" src="'+ $('.news-content .list-block').attr('news-image') +'">');
    
});